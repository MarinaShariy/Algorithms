"use strict";

const assert = require("assert");

function exponentiation(number, power) {

    assert.ok(power >= 0, "negative power isn't supported");
    assert.ok(Math.round(power) === power, "float power isn't supported");

    const powerInBinary = power.toString(2);
    let powerOfTwo = 1;
    let result = 1;

    for (let digit of powerInBinary.split("").reverse()) {
        if (+digit === 1) {
            result *= number ** powerOfTwo;
        }
        powerOfTwo *= 2;
    }

    return result;
}

module.exports = {exponentiation };
