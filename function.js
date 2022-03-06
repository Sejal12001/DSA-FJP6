function sayHello(){
    console.log("Hello to funtion")
}
sayHello();

function sum(num1, num2)
{
    let add  = num1+num2;
    console.log("Addition of given numbers: "+ add);
}
sum(7,3);

function mul(num1, num2)
{
    return num1*num2;
}
let ans=mul(3,5);
console.log(ans);


let a = function sub(num1, num2){
    return num1-num2;
}
console.log(a(10,5));

//IIFE Immediately Invoked Function Expression

(function(){
    console.log("Say hello")
}) ();

(function(num1,num2){
    console.log(num1/num2);
})(10,5);

