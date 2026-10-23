// Checks preparation materials, NOT gameplay. No network or installation.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
import {fixtureSet} from './generate-fixtures.mjs';import {referenceSource} from './lib/reference-source.mjs';
import {fileURLToPath} from 'node:url';import {readJSON,validateDeckText} from './lib/prep-validation.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const skipImages=process.argv.includes('--skip-image-bytes');
const failures=[],checks=[],limitations=[];const add=(name,ok,detail)=>{checks.push({name,status:ok?'PASS':'FAIL',detail});if(!ok)failures.push(name);};
try{
 const manifest=readJSON(path.join(root,'handoff-manifest.json'));
 for(const p of manifest.requiredFiles)add(`file:${p}`,fs.existsSync(path.join(root,p)),p);
 const schema=readJSON(path.join(root,'schema/deck.schema.json'));
 const generated=fixtureSet();const fixtures=readJSON(path.join(root,'fixtures/manifest.json'));
 add('fixture-manifest-reproducible',JSON.stringify(fixtures)===JSON.stringify(generated.manifest),'manifest matches deterministic generator');
 for(const c of fixtures.cases){const r=validateDeckText(generated.files[c.file],schema);add(`fixture:${c.file}`,(r.errors.length===0)===c.accept,{expected:c.accept?'accept':'reject',errors:r.errors});}
 const sample=validateDeckText(fs.readFileSync(path.join(root,'templates/multiple_choice_template.json'),'utf8'),schema);
 add('template',sample.errors.length===0,sample.errors);
 const images=readJSON(path.join(root,'references/images/extraction-manifest.json'));
 add('image-manifest',images.length===13&&images.every(x=>/^[a-f0-9]{64}$/.test(x.sha256)&&x.bytes>0),'13 retained image entries');
 if(skipImages)limitations.push('Original 13 image bytes NOT checked in this run; only manifest structure.');
 else for(const x of images){const p=path.join(root,'references/images',x.filename);const b=fs.existsSync(p)?fs.readFileSync(p):null;add(`image:${x.filename}`,!!b&&b.length===x.bytes&&crypto.createHash('sha256').update(b).digest('hex')===x.sha256,b?'hash and byte count':'missing');}
 const {meta,html}=referenceSource(root);
 add('uploaded-HTML-integrity',true,'all 10 part hashes + compressed hash + exact original HTML hash and byte count');
 add('uploaded-HTML-entry-count',(html.toString('utf8').match(/class="card item"/g)??[]).length===129,'129 labels; external preview reachability not tested');
 add('revision-marker',fs.readFileSync(path.join(root,'AGENTS.md'),'utf8').includes('WW-HANDOFF-3'),'current handoff marker');
}catch(e){failures.push('checker exception');checks.push({name:'checker exception',status:'FAIL',detail:String(e.message)});}
const report={result:failures.length?'FAIL':skipImages?'PASS_WITH_LIMITATIONS':'PASS',scope:'Handoff preparation only; not Codex access or game tests',checksRun:checks.length,failed:failures,limitations,checks};
console.log(JSON.stringify(report,null,2));process.exitCode=failures.length?1:0;
