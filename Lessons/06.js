// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "   Harshit   ";

console.log(firstName);
console.log(firstName.length);

let newString = firstName.trim();

console.log(newString);
console.log(newString.length);

console.log(newString.toUpperCase());  // upper case

console.log(newString.toLowerCase());  // lower case

// slicing of string

let name = "Harshit"; 

let nString = name.slice(0,4);  // hars

console.log(nString);

nString = name.slice(0,5);  // harsh

console.log(nString);

nString = name.slice(3);  // shit, pickup letter from index'3' onwards

console.log(nString);