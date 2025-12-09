"use strict"

// Karnavalas

let sum = 0;
let entered = 0;
let x;

while (x !=0) {
    x = +prompt("Iveskite kiek balu gavo mokinys");
    if (x >= 5){
        entered++;
    }
    else if (x == 0) break;
    sum++;
} 

document.getElementById("content").innerHTML = `I karnavala ejo ${sum} mokiniai, pateko ${entered} `;

