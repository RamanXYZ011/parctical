// template string

let name1 = "Vikrant";
let age = 22;

// My name is Vikrant and my age is 22

// let aboutme = "My name is " + name1 + " and my age is " + age;
 
let aboutme = `My name is ${name1} and my age is ${age}`
 
console.log(aboutme);


// undefined and null

let myname;
console.log(typeof myname); // undefined
myname = "Raman";
console.log(typeof myname, myname);


let myvar = null;

console.log(myvar);  // null
console.log(typeof myvar);  // object (bug/error)

myvar = "Neha";
console.log(myvar);
console.log(typeof myvar, myvar);


// BigInt

let mynum1 = 123;
console.log(mynum1);

console.log(Number.MAX_SAFE_INTEGER);  // llimit of safely stored number

let mynum2 = BigInt(12335676562546747467474757357247836734);  // if want to use number beyond the max limit then use bigInt
// or let mynum2 = 12335676562546747467474757357247836734n;
console.log(mynum2);

// different operation like addition, subtraction can be perfomed on two similar numbers like either bothe are BigInt or normal.