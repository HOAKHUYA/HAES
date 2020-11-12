
'use strict';

const Aes      = require('./aes_node_module/aes.js');
Aes.Ctr      = require('./aes_node_module/haes.js');
var fs = require('fs');
const clipboardy = require('clipboardy');

var data;

function hencrypt(c,e){var tr=Aes.Ctr.encrypt(c,e,256);	clipboardy.writeSync(tr);	return tr;};
function hdecrypt(c,e){var tr=Aes.Ctr.decrypt(c,e,256);	clipboardy.writeSync(tr);	return tr;};
function hget(wfile){try {data = fs.readFileSync(wfile, 'utf8'); return 'The content of '+wfile+' now imported to `data` variable, you can check by `console.log(data)` ';} catch(e) { console.log('Can\'t load that file!.');}}
var cls = function() {process.stdout.write("\u001b[3J\u001b[2J\u001b[1J"); return console.clear();}
cls();
console.log('\n');
console.log('\n');
console.log('\t To encrypt use');
console.log('\thencrypt("content", "passphrase")');
console.log('\n');
console.log('\tFor decrypt use');
console.log('\thdecrypt("content", "passphrase")');
console.log('\n');
console.log('\tTo load file use `hget("file.txt")`');
