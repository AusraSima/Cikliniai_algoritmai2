"use strict"

// Voveryte

let nuts = +prompt("Iveskite sukaupta riesutu kieki: ");
const kids = +prompt("Iveskite voveriuku skaiciu: ");
const winterDays = 92;

let days = 0;

while (nuts > 0){
    nuts -= (kids + 1) * 3;
    days++;
}

document.getElementById("content").innerHTML = days >= winterDays ? `Riesutu sukaupta ${days} dienoms, ju uzteks visai ziemai` : 
`Riesutu sukaupta ${days} dienoms, ju neuzteks visai ziemai`;
