// global variable node.js

console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

const htmlPath = "./output/index.html";

const path = require("path");
const pathResolved = path.resolve(htmlPath);
