//3. Numbers separatora (ES)2021+

let million = 1_000_000;
let binary = 0b1010_0001;
let hexSep = 0xFF_FF;

// 4. BIGINT - For arbitrary large integers

let big = 1531513215564564564546554454544544654544545465460;
console.log(big);
big = 1531513215564564564546554454544544654544545465460n;
console.log(big);
let big2 = BigInt("1531513215564564564546554454544544654544545465460");
console.log(big2);
let bigFromNum = BigInt(42);
console.log("BigInt from number",bigFromNum);
console.log("BigInt from String",big2);
console.log("Big from literal",big);
console.log("Type of Bigint",typeof big);



