"use strict";

const assert = require("assert");
const { bubbleSort } = require("./bubbleSort");

describe("bubble sort", () => {

    it("2 is out of order", () => {
        let arr = [1, 3, 4, 5, 6, 7, 2, 8, 9, 10];
        const actual = bubbleSort(arr);

        assert.deepStrictEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("a lot of numbers is out of order", () => {
        let arr = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10];
        const actual = bubbleSort(arr);

        assert.deepStrictEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("sorted array", () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const actual = bubbleSort(arr);

        assert.deepStrictEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("array with the repeating numbers", () => {
        let arr = [1, 2, 1, 3, 4, 5, 3, 6, 7, 8, 7, 9, 7, 10];
        const actual = bubbleSort(arr);

        assert.deepStrictEqual(actual, [1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 7, 8, 9, 10]);
    });

    it("array with the same numbers", () => {
        let arr = [8, 8, 8, 8, 8, 8, 8, 8];
        const actual = bubbleSort(arr);

        assert.deepStrictEqual(actual, [8, 8, 8, 8, 8, 8, 8, 8]);
    });

    it("empty array", () => {
        let arr = [];
        const actual = bubbleSort(arr);

        assert.deepStrictEqual(actual, []);
    });

    it("array with one element", () => {
        let arr = [0];
        const actual = bubbleSort(arr);

        assert.deepStrictEqual(actual, [0]);
    });

});