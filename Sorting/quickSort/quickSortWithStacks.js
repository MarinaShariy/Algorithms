"use strict";

function quickSortWithStacks(numbers, start = 0, end = numbers.length - 1) {

    if(numbers.length <= 1) {
        return numbers;
    }

    let divider = numbers[start];

    let beforeDividerNumbers = [];
    let afterDividerNumbers = [];

    for (let i = start + 1; i <= end; i ++) {
        if (numbers[i] < divider) {
            beforeDividerNumbers.push(numbers[i]);
        }
        else {
            afterDividerNumbers.push(numbers[i]);
        }
    }

    let sortedNumbers = [
        ...quickSortWithStacks(beforeDividerNumbers),
        divider,
        ...quickSortWithStacks(afterDividerNumbers)
    ];

    return sortedNumbers;
}

module.exports = { quickSortWithStacks };
