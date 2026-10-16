//Topic : Null Vs Undefined in Javascript

/* simple definition

 undefined : the value is not assigned.Javascript itself sets this
 automatically.
 
 null : the value is explicitly set to empty or no value.
         It is intentional absence of any value
         */

         let a 
console.log(a);

var audi = null;
console.log(audi);

//1. undefined

let userName ;
console.log(userName);
console.log(typeof userName);

function greet(){
    //no return
}
console.log(greet());

let x;
x = 10;
console.log(x);

//2. null

let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture);//object <- JS Quirk

/*
Feature      |  Undefined               | null                  |
-------------|--------------------------|-----------------------|
Meaning      | Not assigned yet         | intentionally empty   |   
Who sets it  | JavaScript Automatically | Developer manually    | 
Type         | undefined                | object                |
==           | null == undefined -> true|                       |
===          | null === undefined->false|                       |
*/
