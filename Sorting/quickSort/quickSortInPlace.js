"use strict";

/**
 * Меняет исходный массив по ссылке, сортируя элементы в нем
 * @param {number[]} numbers
 * @param {number} start
 * @param {number} end
 * @returns {void}
 */

function quickSortInPlace(numbers, start = 0, end = numbers.length - 1) {

    if (end <= start) {
        return;
    }

    let divider = numbers[start];

    let bottomIndex = start;
    let topIndex = end;

    while (topIndex > bottomIndex) {

        topIndex = indexOfSmallerValue(numbers, topIndex, bottomIndex, divider);

        if (topIndex <= bottomIndex) {
            numbers[bottomIndex] = divider;
            break;
        }
        numbers[bottomIndex] = numbers[topIndex];

        bottomIndex++;
        indexOfGreaterValue(numbers, topIndex, bottomIndex, divider);

        if (topIndex <= bottomIndex) {
            numbers[topIndex] = divider;
            break;
        }
        numbers[topIndex] = numbers[bottomIndex];
    }

    quickSortInPlace(numbers, start, topIndex - 1);
    quickSortInPlace(numbers, topIndex + 1, end);
}


function indexOfSmallerValue(numbers, topIndex, bottomIndex, divider) {
    while(numbers[topIndex] > divider && topIndex > bottomIndex) {
        topIndex--;
    }
    return topIndex;
}

function indexOfGreaterValue(numbers, topIndex, bottomIndex, divider) {
    while(numbers[bottomIndex] <= divider && topIndex > bottomIndex) {
        bottomIndex++;
    }
    return bottomIndex;
}


module.exports = { quickSortInPlace };

