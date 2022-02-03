"use strict";

const assert = require("assert");
const { quickSortInPlace } = require("./quickSortInPlace");

describe("quicksort in place", () => {

    it("not sorted array", () => {
        const arr = [3, 48, 14, 3, 4, 5, 4, 0, -3, 23, 3];
        quickSortInPlace(arr);
        assert.deepStrictEqual(arr, [-3, 0, 3, 3, 3, 4, 4, 5, 14, 23, 48]);
    });

    it("sorted array", () => {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7];
        quickSortInPlace(arr);
        assert.deepStrictEqual(arr, [0, 1, 2, 3, 4, 5, 6, 7]);
    });

    it("empty array", () => {
        const arr = [];
        quickSortInPlace(arr);
        assert.deepStrictEqual(arr, []);
    });

    it("array with 2 elements", () => {
        const arr = [2, 1];
        quickSortInPlace(arr);
        assert.deepStrictEqual(arr, [1, 2]);
    });

    it("array with the same elements", () => {
        const arr = [2, 2, 2, 2, 2, 2, 2];
        quickSortInPlace(arr);
        assert.deepStrictEqual(arr, [2, 2, 2, 2, 2, 2, 2]);
    });

    it("array with 1 element", () => {
        const arr = [2];
        quickSortInPlace(arr);
        assert.deepStrictEqual(arr, [2]);
    });

});