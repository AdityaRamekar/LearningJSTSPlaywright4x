//Nested Ternary
// ??Multiple Conditions
// age = 26;
// age > 18 -> Go GainNode,age > 25 -> Drink

let age = 26;

let is_pramod_enjoy = (age>18) ?(age>25?"Goa & Drink":"No Drink,Only Goa"):"No Goa";
console.log(`Pramod can Enjoy ${is_pramod_enjoy}`);


