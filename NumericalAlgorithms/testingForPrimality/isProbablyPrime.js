"use strict";

const bigInt = require("big-integer");

function isProbablyPrime(p, maxQuantityOfTests) {

    if (p % 2 === 0 || p <= 2) {
        return false;
    }

    let a = 1;
    const powerOfA = p - 1;
    const incrementOfA = Math.floor((p - a) / maxQuantityOfTests);

    for (let i = 1; i <= maxQuantityOfTests && a < p; i ++) {
        const mod = bigInt(a).modPow(powerOfA, p);
        if ( mod.toString() !== "1" ) {
            return false;
        }

        a += incrementOfA;
    }

    return true;
}

module.exports = { isProbablyPrime };

