// READ-ONLY repo/tool inspection plus a self-cleaning OS temporary-file probe.
// No remote push, installation, credentials, environment dump or game creation.
import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import {spawnSync} from 'node:child_process';import {createRequire} from 'node:module';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),require=createRequire(import.meta.url);
const rows=[];const run=(cmd,args)=>spawnSync(cmd,args,{cwd:root,encoding:'utf8',timeout:15000,maxBuffer:500000});
const row=(name,status,evidence,required=true)=>rows.push({name,status,evidence,required});
for(const cmd of ['git','node','npm']){const r=run(cmd,['--version']);row(cmd,r.status===0?'VERIFIED':'MISSING',r.status===0?r.stdout.trim():'command unavailable or failed');}
const [major,minor]=process.versions.node.split('.').map(Number);
row('Node baseline',(major>=24||(major===22&&minor>=12))?'VERIFIED':'BLOCKED',`Observed ${process.versions.node}; baseline 22.12+ or 24+; verify selected package engines at M1.`);
const head=run('git',['rev-parse','HEAD']),branch=run('git',['branch','--show-current']);
row('Git checkout',head.status===0?'VERIFIED':'UNVERIFIED',head.status===0?{head:head.stdout.trim(),branch:branch.stdout.trim()||'(detached HEAD)'}:'No usable Git checkout in this runner');
const remote=run('git',['config','--get','remote.origin.url']);
const expected=/github\.com[/:]terminatorz24\/whisker-watch(?:\.git)?(?:\s*)$/.test(remote.stdout.trim());
row('Repository identity',expected?'VERIFIED':'UNVERIFIED',expected?'origin identifies terminatorz24/whisker-watch (URL intentionally not printed)':'Expected origin not verified; do not print credential-bearing URLs');
let tmp;try{tmp=fs.mkdtempSync(path.join(os.tmpdir(),'ww-preflight-'));const p=path.join(tmp,'probe.txt');fs.writeFileSync(p,'probe');row('Local filesystem',fs.readFileSync(p,'utf8')==='probe'?'VERIFIED':'BLOCKED','Temporary OS file written/read; removed in finally');}catch{row('Local filesystem','BLOCKED','Temporary write/read failed');}finally{if(tmp)fs.rmSync(tmp,{recursive:true,force:true});}
const check=run(process.execPath,['scripts/check-handoff.mjs']);row('Preparation files/fixtures',check.status===0?'VERIFIED':'BLOCKED',check.status===0?'check-handoff exit 0':'Run check-handoff directly to inspect failures');
row('GitHub remote READ','UNVERIFIED','Agent must read current remote file/ref via its authorized connector/checkout workflow. Cached files alone are insufficient.');
row('GitHub WRITE/persistence','UNVERIFIED','Read-only audit: no push performed. Ask APPROVE ACCESS TEST for isolated branch/commit/PR test when needed.');
for(const app of ['Canva','Higgsfield','Figma'])row(app,'UNVERIFIED','Cannot inspect MCP/plugin authorization from this shell script. Agent must make actual harmless provider read.',false);
let browserPackage=false;for(const m of ['@playwright/test','playwright']){try{require.resolve(m);browserPackage=true;}catch{}}
row('Headless browser', 'UNVERIFIED',browserPackage?'Package resolves; launch/screenshot still must be tested.':'No local Playwright package resolves; install only after authorized setup/build.',false);
row('Dependency network','UNVERIFIED','No network test made by this script; inspect policy and try narrow registry read when authorized.');
row('Game implementation','MISSING','Expected: not started. Future game tests are NOT IMPLEMENTED, not preflight failures.',false);
row('Real Mac/iPhone tests','UNVERIFIED','Later owner/device tests required; emulation is not the physical device.',false);
console.log(JSON.stringify({preflight:'OWNER REVIEW REQUIRED',scope:'This runner only; not another Codex workspace',rows,next:'Show evidence and missing access to the owner, then STOP for APPROVE BUILD. Do not code.'},null,2));
