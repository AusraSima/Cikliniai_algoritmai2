"use strict"

// Knyga

let m = +prompt("Iveskite kiek knygoje yra skyriu: ");

let days = 0;
let average = 0;
let read = m;

while (m > 0) {
    m -= days + 1;
    days++;
}

average = (read / days).toFixed(2);

document.getElementById("content").innerHTML = `Tada visa knyga perskaitys per  ${days} dienas, vidutiniskai per diena jis
perskaite  ${average} skyrius`;