import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
await fs.rm('dist',{recursive:true,force:true});await fs.mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js']){const contents=await fs.readFile(file,'utf8');if(file==='app.js')new vm.Script(contents);await fs.writeFile(path.join('dist',file),contents);}
await fs.cp('assets','dist/assets',{recursive:true});
console.log('Build correcto: dist/');
