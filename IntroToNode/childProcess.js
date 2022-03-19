let cp = require('child_process');
const { text } = require('stream/consumers');
//console.log(cp);

// cp.execFileSync("calc");

let content = cp.execSync("node test.js");
console.log("Output from test.js :", + content);

// cp.execSync("code");

