// string concatenation

let string1 = "Rakesh";
let string2 = "Kaushal";

let fullname = string1 +" "+ string2;
console.log(fullname);


let new1 = "22";
let new2 = "44";

let new3 = new1 + new2;
console.log(new3);  // result is string
console.log(typeof new3);

let new4 = +new1 + +new2;
console.log(new4);
console.log(typeof new4);