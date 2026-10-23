import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import {referenceSource} from './lib/reference-source.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');const {html}=referenceSource(root);
const dest=path.join(root,'.cache/references/BTD6_Complete_Visual_Reference_Library.html');
fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,html);
console.log(JSON.stringify({output:dest,bytes:html.length,entries:129,warning:'Remote third-party images need network and may not load. No URL/image availability verified.'}));
