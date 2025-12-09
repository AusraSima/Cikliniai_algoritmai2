"use strict"

// Saldainiai

let n = +prompt("Iveskite kiek saldainiu gavo Petriukas: ");

let days = 0;
let candysLeft = 0;

while (n > 0) {
    let x = +prompt("Iveskite kiek saldainiu nori suvalgyri ta diena");
    if (n >= x) {
        n -= x;
        days++;
    } else break;
}

candysLeft += n;

document.getElementById("content").innerHTML = `Petriukui saldainiu uzteks ${days} dienoms, ir jam liks ${candysLeft} saldainiai`;
