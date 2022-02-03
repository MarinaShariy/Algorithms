"use strict";

const assert = require("assert");
const { binarySearch } = require("./binarySearch");

describe("binary search", () => {

    it("the number is in the array", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        const actual = binarySearch(array, 8);
        assert.strictEqual(actual, 7);
    });

    it("the number isn't in the array", () => {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const actual = binarySearch(array, 8);
        assert.strictEqual(actual, -1);
    });

    it("the number is in the one-element array", () => {
        const array = [42];
        const actual = binarySearch(array, 42);
        assert.strictEqual(actual, 0);
    });

    it("the number isn't in the one-element array", () => {
        const array = [99];
        const actual = binarySearch(array, 42);
        assert.strictEqual(actual, -1);
    });

    it("empty array", () => {
        const array = [];
        const actual = binarySearch(array, 42);
        assert.strictEqual(actual, -1);
    });

});