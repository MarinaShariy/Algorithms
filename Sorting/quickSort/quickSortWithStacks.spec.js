"use strict";

const assert = require("assert");
const { quickSortWithStacks } = require("./quickSortWithStacks");

describe("quicksort with stacks", () => {

    it("not sorted array", () => {
        const arr = [3, 48, 14, 3, 4, 5, 4, 0, -3, 23, 3];
        const actual = quickSortWithStacks(arr);
        assert.deepStrictEqual(actual, [-3, 0, 3, 3, 3, 4, 4, 5, 14, 23, 48]);
    });

    it("sorted array", () => {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7];
        const actual = quickSortWithStacks(arr);
        assert.deepStrictEqual(actual, [0, 1, 2, 3, 4, 5, 6, 7]);
    });

    it("empty array", () => {
        const arr = [];
        const actual = quickSortWithStacks(arr);
        assert.deepStrictEqual(actual, []);
    });

    it("array with 2 elements", () => {
        const arr = [2, 1];
        const actual = quickSortWithStacks(arr);
        assert.deepStrictEqual(actual, [1, 2]);
    });

    it("array with the same elements", () => {
        const arr = [2, 2, 2, 2, 2, 2, 2];
        const actual = quickSortWithStacks(arr);
        assert.deepStrictEqual(actual, [2, 2, 2, 2, 2, 2, 2]);
    });

    it("array with 1 element", () => {
        const arr = [2];
        const actual = quickSortWithStacks(arr);
        assert.deepStrictEqual(actual, [2]);
    });

});