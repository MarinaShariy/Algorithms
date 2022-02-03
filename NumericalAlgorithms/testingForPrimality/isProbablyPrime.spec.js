"use strict";

const assert = require("assert");
const { isProbablyPrime } = require("./isProbablyPrime");

describe("testing for primality", () => {

    it("number 2", () => {
        const actual = isProbablyPrime(2, 1);
        assert.ok(!actual);
    });

    it("number 1", () => {
        const actual = isProbablyPrime(1, 1);
        assert.ok(!actual);
    });

    it("number is prime", () => {
        const actual = isProbablyPrime(5, 3);
        assert.ok(actual);
    });

    it("number isn't prime", () => {
        const actual = isProbablyPrime(44, 5);
        assert.ok(!actual);
    });

    it("two-digit prime number and 20 tests", () => {
        const actual = isProbablyPrime(43, 20);
        assert.ok(actual);
    });

    it("three-digit prime number and 100 tests", () => {
        const actual = isProbablyPrime(139, 100);
        assert.ok(actual);
    });

    it("four-digit composite number and 100 tests", () => {
        const actual = isProbablyPrime(3543, 100);
        assert.ok(!actual);
    });

});