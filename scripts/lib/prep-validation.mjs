// Small dependency-free PREPARATION checker for the committed schema's subset.
// Not the game's production parser. Codex must implement/test the browser importer.
import fs from 'node:fs';
export const readJSON=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
export function schemaErrors(value,schema,at='$'){
 const errors=[]; const add=m=>errors.push(`${at}: ${m}`);
 const types=Array.isArray(schema.type)?schema.type:[schema.type];
 const matches=t=>t===undefined||t==='null'&&value===null||t==='array'&&Array.isArray(value)||t==='object'&&value!==null&&typeof value==='object'&&!Array.isArray(value)||t==='integer'&&Number.isSafeInteger(value)||t==='number'&&typeof value==='number'&&Number.isFinite(value)||t==='string'&&typeof value==='string'||t==='boolean'&&typeof value==='boolean';
 if(!types.some(matches)){add('invalid type');return errors;}
 if(Object.hasOwn(schema,'const')&&value!==schema.const)add('wrong constant');
 if(schema.enum&&!schema.enum.includes(value))add('not in enum');
 if(typeof value==='string'){
  const n=[...value].length;
  if(schema.minLength!==undefined&&n<schema.minLength)add('too short');
  if(schema.maxLength!==undefined&&n>schema.maxLength)add('too long');
  if(schema.pattern&&!new RegExp(schema.pattern,'u').test(value))add('pattern mismatch');
 }
 if(typeof value==='number'){
  if(schema.minimum!==undefined&&value<schema.minimum)add('below minimum');
  if(schema.maximum!==undefined&&value>schema.maximum)add('above maximum');
 }
 if(Array.isArray(value)){
  if(schema.minItems!==undefined&&value.length<schema.minItems)add('too few items');
  if(schema.maxItems!==undefined&&value.length>schema.maxItems)add('too many items');
  if(schema.uniqueItems&&new Set(value.map(v=>JSON.stringify(v))).size!==value.length)add('duplicate array item');
  if(schema.items)value.forEach((v,i)=>errors.push(...schemaErrors(v,schema.items,`${at}[${i}]`)));
 }
 if(value!==null&&typeof value==='object'&&!Array.isArray(value)){
  for(const k of schema.required??[])if(!Object.hasOwn(value,k))add(`missing ${k}`);
  for(const k of Object.keys(value)){
   if(['__proto__','constructor','prototype'].includes(k)){add('forbidden object key');continue;}
   if(Object.hasOwn(schema.properties??{},k))errors.push(...schemaErrors(value[k],schema.properties[k],`${at}.${k}`));
   else if(schema.additionalProperties===false)add(`unknown ${k}`);
  }
 }
 return errors;
}
export function validateDeckText(text,schema){
 const errors=[];let deck;
 if(Buffer.byteLength(text,'utf8')>5*1024*1024)return {errors:['deck exceeds 5 MiB'],deck:null};
 try{deck=JSON.parse(text.replace(/^\uFEFF/,''));}catch{return {errors:['invalid JSON'],deck:null};}
 errors.push(...schemaErrors(deck,schema));
 if(Array.isArray(deck?.questions)){
  const ids=new Set();
  for(const q of deck.questions){
   if(!q||typeof q!=='object')continue;
   if(ids.has(q.id))errors.push(`duplicate question id: ${q.id}`);ids.add(q.id);
   if(typeof q.answer==='string'&&Array.isArray(q.wrong)&&q.wrong.every(v=>typeof v==='string')){
    const options=[q.answer,...q.wrong].map(v=>v.normalize('NFC').trim().toLowerCase());
    if(new Set(options).size!==options.length)errors.push(`overlapping options: ${q.id}`);
   }
  }
 }
 return {errors,deck};
}
