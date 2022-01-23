"use strict";

const assert = require("assert");
const { binarySearch } = require("./binarySearch");

describe("binary search", () => {

    it("number has found in array", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        const actual = binarySearch(array, 8);
        assert.strictEqual(actual, 7);
    });

    it("number hasn't found in array", () => {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const actual = binarySearch(array, 8);
        assert.strictEqual(actual, -1);
    });

    it("array with the one same element", () => {
        const array = [42];
        const actual = binarySearch(array, 42);
        assert.strictEqual(actual, 0);
    });

    it("array with one different element", () => {
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