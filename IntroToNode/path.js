"C:\Users\hp\Documents\WEB DEV\FJP-6\node\path.js"

// const { basename } = require("path");
let path  = require("path");
console.log(path);

let extensionName  = path.extname("C:\Users\hp\Documents\WEB DEV\FJP-6\node\path.js");
console.log(extensionName);

let baseName  = path.basename("C:\Users\hp\Documents\WEB DEV\FJP-6\node\path.js");
console.log(baseName);

console.log(__dirname);
console.log(__filename);

let dirPath  = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath, "test.js");
console.log(newFilePath);