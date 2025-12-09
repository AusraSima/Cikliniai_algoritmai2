"use strict"

// Kurjeris

let above100 = 0;
let average = 0;
let totalDelivered = 0;
let delivery;

while (delivery != 0) {
    delivery = +prompt("Iveskite uzsakymo suma");
    if (delivery > 0) {
        if (delivery > 100) {
            above100++;
        }
        totalDelivered++;
        average += delivery;
    }
};

average /= totalDelivered;

document.getElementById("content").innerHTML = `Siuntu virs 100  ${above100}, vidutine suma  ${average}, viso ${totalDelivered}`;