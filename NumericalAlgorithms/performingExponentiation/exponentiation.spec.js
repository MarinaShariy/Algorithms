"use strict";

const { exponentiation } = require("./exponentiation");
const assert = require("assert");

describe ("exponentiations", () => {

    it("7^10", () => {
        const actual = exponentiation(7, 10);
        assert.strictEqual(actual, 282475249);
    });

    it("1^1", () => {
        const actual = exponentiation(1, 1);
        assert.strictEqual(actual, 1);
    });

    it("2^0", () => {
        const actual = exponentiation(2, 0);
        assert.strictEqual(actual, 1);
    });

    it("3.7^5", () => {
        const actual = exponentiation(3.7, 5);
        const actualRounded = Math.round(actual * 100000) / 100000;
        assert.strictEqual(actualRounded, 693.43957);
    });

    it("0^2", () => {
        const actual = exponentiation(0, 2);
        assert.strictEqual(actual, 0);
    });

    it("reject negative powers", () => {
        assert.throws(() => {
            exponentiation(7, -10);
        }, /negative power isn't supported/);
    });

    it("reject float powers", () => {
        assert.throws(() => {
            exponentiation(7, 0.357);
        }, /float power isn't supported/);
    });

});