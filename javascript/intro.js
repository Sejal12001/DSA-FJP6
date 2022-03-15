// console.log("Swagat hai ap sab ka!!!")
// console.log("Pepcoders")

// //variables in js and data types

// let num = 10;
// console.log(num);

// let char = 'a';
// console.log(char);

// let str = 'I am a coder';
// console.log(str);

// let bool = true;
// console.log(bool);

// // for(i=1;i<=5; i++)
// // {
// //     console.log(i);
// // }

// let count = 10;
// while(count>0)
// {
//     console.log(count);
//     count--;
// }

// // is prime

// let p = 7;
// for(i=2; i<7/2; i++)
// {
    
// }
var n=  11767
let isPrime=true
for(var i =2;i<=n/2;i++){
    if(n%i==0){
        isPrime=false;
        break;
    }
} 
if(isPrime==true){
    console.log("prime")
}
else{
     console.log("Not prime")
}
