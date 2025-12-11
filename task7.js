"use strict"

// Karnavalas

let sum = 0;
let entered = 0;
let x = +prompt("Iveskite kiek balu gavo mokinys");

while (x > 0 && x <= 10) {

    if (x >= 5) {
        entered++;
    }
    
    sum++;
    x = +prompt("Iveskite kiek balu gavo mokinys");
}

document.getElementById("content").innerHTML = `I karnavala ejo ${sum} mokiniai, pateko ${entered} `;

