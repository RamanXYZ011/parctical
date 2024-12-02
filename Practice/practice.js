// 1. append extra text in heading h1

// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + "How are you all?";  // concatenation of two strings


let divs = document.querySelectorAll(".box");
console.dir(divs);

let idx = 0;
for(div of divs){
    div.innerText = `New value ${idx}`
    idx++;
}

// divs[0].innerText = "New value 1";
// divs[1].innerText = "New value 2";
// divs[2].innerText = "New value 3";
