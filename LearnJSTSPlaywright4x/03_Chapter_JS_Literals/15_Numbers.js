
//All no type in JavaScript
//In JavaScript numbers are always number type ( except BigInt)
//There is no separate int,float,double,string,etc.

// 1. INTEGER LITERALS

// Decimal (Base 10) - most common
let decimal = 42;
console.log("Decimal",decimal); //42

//binary (Base 2) - starts with 0b or 0B
let binary = 0b1010
console.log("Binary",binary);//10

//octal (Base 8) - starts with 0o or 0O
let octal = 0o52;
console.log("octal",octal);//42

//hexadecimal (Base 16) - starts with 0x or 0X
let hexadecimal = 0x2A;
console.log("Hexadecimal",hexadecimal);//42

//2. floating point literals

let float1 = 3.14;
let float2 = -0.5;
let float3 = .5;//valid bu avoid for readability
let float4 = 5.; //valid bu avoid for readability
console.log(float3);

console.log(float4);

//Exponential notation

let exp1 = 1.5e3;
let exp2 = 1.5e-3;
let exp3 = 2E10;

console.log("Exponential 1.5e3:", exp1);//1500
console.log("Exponential 1.5e-3:", exp2);//0.0015
console.log("Exponential 2E10:", exp3);//20000000000
