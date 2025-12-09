"use strict"

// Degalai

let t = +prompt("Iveskite kuro bako talpa: ");
const n = +prompt("Iveskite kuro sanaudas: ");

let days = 0;
let travelDay = 1;

while (t > 0) {
    if (travelDay % 2 == 0) {
        t -= n;
    }
    else {
        t -= 2 * n;
    }
    travelDay++;
    days++;
}

document.getElementById("content").innerHTML = `Keliauti bus galima ${days} dienu`;
