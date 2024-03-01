const fs = require('fs');
// fs.writeFileSync('./test file', "And all I can see is yellow lemon tree");
// let file_content = fs.readFileSync('.\test file', 'utf8').toString();
// console.log(file_content);
let file_content =  fs.readFileSync('./test file', 'utf8').toString();
//for showing the data in the console log
file_content = file_content.replace("utf8", "just a lemon tree");
fs.writeFileSync('./test file', file_content);
const Updated_content = fs.readFileSync('./test file','utf8').toString();
console.log(Updated_content);