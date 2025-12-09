"use strict";

// Atvirukai

const n = +prompt("Enter number of friends");
let k = +prompt("Enter number of cards types in the store");
let sum = 0;

while (k > 0) {
    let card = +prompt("Enter quantity of this type of card in the store");
    if (card >= n) {
        sum++;
    }
    k--;
}

document.getElementById(
    "content"
).innerHTML = `${sum} rusiu atviruku uzteks visiems draugams`;
