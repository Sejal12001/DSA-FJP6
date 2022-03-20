let fs  = require("fs");
// console.log(fs);

let path = require("path");
// let filePath = path.join(__dirname, "file.txt");
// console.log(filePath);

// //C-create
// //creates file if doesn't exist, else overwrites existing file
// fs.writeFileSync(filePath, "Hello!!! I am new text file");

// //R-read
// console.log("Before Update: \n");
// let content = fs.readFileSync(filePath, 'utf-8');
// console.log(content);

// //U-update
// fs.appendFileSync(filePath, "\nNewly added content");
// console.log("\nAfter Update : \n");
// console.log(fs.readFileSync(filePath, 'utf-8'));

// //D-delete
// // fs.unlinkSync(filePath);

//Create a  Directory

if(!fs.existsSync("hamariDirectory"));
    fs.mkdirSync("hamariDirectory");

//Read  a  Directory

let folderPath = __dirname;

let contentOfFolder = fs.readdirSync(folderPath);
console.log(contentOfFolder);

//Delete a Directory
fs.rmdirSync("hamariDirectory");








