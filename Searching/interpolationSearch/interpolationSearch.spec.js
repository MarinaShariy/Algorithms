"use strict";

const assert = require("assert");
const { interpolationSearch } = require("./interpolationSearch");

describe("interpolation search", () => {

    it("the number is in the array", () => {
        const arr = [1, 10, 20, 30, 40, 50, 55, 60, 65, 70];
        const actual = interpolationSearch(arr, 20);
        assert.strictEqual(actual, 2);
    });

    it("the negative number is in the array", () => {
        const arr = [-1000, 3, 5];
        const actual = interpolationSearch(arr, -8);
        assert.strictEqual(actual, -1);
    });

    it("the number is in the array only with the same numbers", () => {
        const arr = [7, 7, 7, 7, 7, 7, 7];
        const actual = interpolationSearch(arr, 7);
        assert.strictEqual(actual, 0);
    });

    it("empty array", () => {
        const arr = [];
        const actual = interpolationSearch(arr, 7);
        assert.strictEqual(actual, -1);
    });

    it("the number is in the one-element array", () => {
        const arr = [7];
        const actual = interpolationSearch(arr, 7);
        assert.strictEqual(actual, 0);
    });

    it("the number isn't in the one-element array", () => {
        const arr = [8];
        const actual = interpolationSearch(arr, 7);
        assert.strictEqual(actual, -1);
    });

    it("the number isn't in the array with 0", () => {
        const arr = [0];
        const actual = interpolationSearch(arr, 7);
        assert.strictEqual(actual, -1);
    });

    it("the number is in the array with several groups of the same numbers", () => {
        const arr = [-1, -1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5, 6, 6, 6, 7, 7, 7];
        const actual = interpolationSearch(arr, 4);
        assert.strictEqual(actual, 12);
    });

    it("the number isn't in the array with several groups of the same numbers", () => {
        const arr = [-1, -1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5, 6, 6, 6, 7, 7, 7];
        const actual = interpolationSearch(arr, 3);
        assert.strictEqual(actual, -1);
    });

});