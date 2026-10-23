// Lossless original uploaded HTML; no network or page-script execution.
import fs from 'node:fs';import path from 'node:path';import zlib from 'node:zlib';import crypto from 'node:crypto';
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
export function referenceSource(root){
 const meta=JSON.parse(fs.readFileSync(path.join(root,'references/library-source.json'),'utf8'));
 const chunks=meta.parts.map(p=>{
  if(!/^part-\d{2}\.bin$/.test(p.file))throw Error('Invalid reference part name');
  const b=fs.readFileSync(path.join(root,'references',meta.partsDirectory,p.file));
  if(b.length!==p.bytes||hash(b)!==p.sha256)throw Error(`Reference part mismatch: ${p.file}`);return b;
 });
 const gzip=Buffer.concat(chunks);if(hash(gzip)!==meta.compressedSha256)throw Error('Reference compressed hash mismatch');
 const html=zlib.gunzipSync(gzip,{maxOutputLength:1024*1024});
 if(html.length!==meta.expandedBytes||hash(html)!==meta.expandedSha256)throw Error('Reference original HTML mismatch');
 return {meta,html};
}
