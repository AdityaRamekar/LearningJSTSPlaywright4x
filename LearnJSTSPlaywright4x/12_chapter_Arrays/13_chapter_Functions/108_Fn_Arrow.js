function greet(name){
    return `Hello, ${name}`;
}

const greet1 = function(name){
    return `Hello , ${name}`;
}

//Arrow fn
const greet2 = (name2) =>`Hello, ${name}`;
//if you want to make a normal function to arrow function
//Remove the keyword function, remove the keyword
// Reacturn, remove the curly braces , and use the =>