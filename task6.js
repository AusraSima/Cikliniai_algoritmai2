"use strict"

// Skaiciuotuvas

function sumNumbers(number, result) {
    result += number;
    return result;
}

function subtractNumbers(number, result) {
    result -= number;
    return result;
}

function multiplyNumbers(number, result) {
    result *= number;
    return result;
}

function findMaximalValue(number, max) {
    if (x > max) {
        max = x;
    }
    return max;
}

function findMinimalValue(number, min) {
    if (x < min) {
        min = x;
    }
    return min;
}

const suma = 1;
const atimtis = 2;
const daugyba = 3;
const maxReiksme = 4;
const minreiksme = 5;

let result = 0;
let x;

const action = +prompt("Enter action's number");
switch (action) {
    case 1:
        do {
            x = +prompt("Enter a number");
            result = sumNumbers(x, result);
        } while (x != 0);
        break;
    case 2: result = +prompt("Enter a number");
        do {
            x = +prompt("Enter a number");
            result = subtractNumbers(x, result);
        } while (x != 0);
        break;
    case 3: result = +prompt("Enter a number");
        do {
            x = +prompt("Enter a number");
            if (x == 0) break;
            result = multiplyNumbers(x, result);
        } while (x != 0);
        break;
    case 4: result = +prompt("Enter a number");
        do {
            x = +prompt("Enter a number");
            result = findMaximalValue(x, result);
        } while (x != 0);
        break;
    case 5: result = +prompt("Enter a number");
        do {
            x = +prompt("Enter a number");
            result = findMinimalValue(x, result);
        } while (x != 0);
        break;
}

document.getElementById("content").innerHTML = `result ${result} `;

