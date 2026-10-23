// Development fixtures only. No game implementation or external dependencies.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const serialize=x=>JSON.stringify(x)+'\n';
export function makeDeck(n,slug='demo-arithmetic') {
  return {deckFormat:1,deckType:'multiple_choice',deckId:slug,title:'Synthetic development questions',notes:['Test data only; players use their own decks.'],questions:Array.from({length:n},(_,j)=>{
    const i=j+1,topic=['Addition','Subtraction','Multiplication','Division'][j%4];
    const a=i+5,b=j%9+2;
    const [q,answer]=j%4===0?[`${a} + ${b}`,a+b]:j%4===1?[`${a+b} - ${b}`,a]:j%4===2?[`${a} * ${b}`,a*b]:[`${a*b} / ${b}`,a];
    return {id:`q${String(i).padStart(4,'0')}`,topic,question:`What is ${q}?`,answer:String(answer),wrong:[answer+1,answer+2,answer+3].map(String),...(i%5===0?{}:{explanation:`${q} = ${answer}.`})};
  })};
}
export function fixtureSet(){
const clone=x=>structuredClone(x);
const full=makeDeck(120),small=makeDeck(30),one=makeDeck(1);
const optional=makeDeck(3);optional.questions[0].explanation='';delete optional.questions[1].explanation;
const repeated=makeDeck(3);repeated.questions[1]={...repeated.questions[0],id:'q0002'};
const unicode=makeDeck(2);unicode.questions[0].question='Plain text only: <b>cat</b>, "quotes", café, 猫, 🐈\nWhat is 6 + 2?';
const stats=makeDeck(2);stats.questions[0].reviewStats={correct:3,incorrect:1,skipped:0,seen:4};
const revision=clone(small);revision.questions=revision.questions.filter(q=>q.id!=='q0002');revision.questions[0].question='Revised prompt: compute 6 + 2.';revision.questions.push({...one.questions[0],id:'q0031'});
const empty=makeDeck(0),duplicate=makeDeck(2);duplicate.questions[1].id=duplicate.questions[0].id;
const twoWrong=makeDeck(1);twoWrong.questions[0].wrong.pop();
const sameAnswer=makeDeck(1);sameAnswer.questions[0].wrong[0]=` ${sameAnswer.questions[0].answer} `;
const wrongExplain=makeDeck(1);wrongExplain.questions[0].explanation=42;
const missingAnswer=makeDeck(1);delete missingAnswer.questions[0].answer;
const wrongKind=makeDeck(1);wrongKind.deckType='other';
const entries=[
 ['valid/demo-full-120.json',full,true],['valid/demo-quick-30.json',small,true],['valid/single-1.json',one,true],
 ['valid/boundary-19.json',makeDeck(19),true],['valid/boundary-99.json',makeDeck(99),true],
 ['valid/optional-explanations.json',optional,true],['valid/repeated-concepts.json',repeated,true],['valid/unicode.json',unicode,true],['valid/review-stats.json',stats,true],
 ['revisions/original.json',small,true],['revisions/updated.json',revision,true],
 ['invalid/empty.json',empty,false],['invalid/duplicate-ids.json',duplicate,false],['invalid/two-wrong.json',twoWrong,false],
 ['invalid/answer-as-wrong.json',sameAnswer,false],['invalid/non-string-explanation.json',wrongExplain,false],['invalid/missing-answer.json',missingAnswer,false],['invalid/wrong-kind.json',wrongKind,false]
];
const bad=[['invalid/malformed.json','{"deckFormat":1,"questions":[}\n'],['invalid/prototype-key.json',serialize(one).replace('"deckFormat":1','"__proto__":{},"deckFormat":1')]];
const files=Object.fromEntries([...entries.map(([p,d])=>[p,serialize(d)]),...bad]);
const manifest={fixtureFormat:1,generatedBy:'scripts/generate-fixtures.mjs',cases:[...entries.map(([file,d,accept])=>({file,accept,count:d.questions.length})),...bad.map(([file])=>({file,accept:false}))]};
return {files,manifest,template:serialize(optional)};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const f=fixtureSet();
 if(process.argv.includes('--verify')){
  const expected=JSON.parse(fs.readFileSync(path.join(root,'fixtures/manifest.json'),'utf8'));
  if(JSON.stringify(expected)!==JSON.stringify(f.manifest))throw Error('Fixture manifest differs from generator');
  if(fs.readFileSync(path.join(root,'templates/multiple_choice_template.json'),'utf8')!==f.template)throw Error('Template differs from generator');
  if(JSON.stringify(f.files)!==JSON.stringify(fixtureSet().files))throw Error('Fixture generation is not deterministic');
 }else{
  const dest=path.join(root,'.cache/fixtures');
  for(const [rel,text] of Object.entries({...f.files,'manifest.json':serialize(f.manifest)})){
   const p=path.join(dest,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,text);
  }
  if(process.argv.includes('--stress'))fs.writeFileSync(path.join(dest,'stress-5000.json'),serialize(makeDeck(5000,'stress-deck')));
 }
 console.log(JSON.stringify({result:'PASS',action:process.argv.includes('--verify')?'verified deterministic fixture generation':'generated .cache/fixtures',cases:f.manifest.cases.length,gameTestsRun:false}));
}
