//empty array

let arr = [];
console.log(arr);

//array with elements

let elearr = [1,3,4,56,7,"Hello",false,'c',4,6];
console.log(elearr);
console.log("Element at 3rd index "+elearr[4]);
console.log("Element at 0th index "+elearr[0]);

elearr[4] = "Updated this one";
console.log(elearr);

//Arrays Methods
//1. push
console.log("Array before push "+elearr);
elearr.push("new item");
console.log("Array ater push "+elearr);