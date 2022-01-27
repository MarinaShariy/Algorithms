"use strict";

function quickSortInPlace(numbers, start = 0, end = numbers.length - 1) {

    if (end <= start) {
        return;
    }

    let divider = numbers[start];

    let bottomIndex = start;
    let topIndex = end;

    while (topIndex > bottomIndex) {

        while(numbers[topIndex] > divider && topIndex > bottomIndex) {
            topIndex = topIndex - 1;
        }
        if (topIndex <= bottomIndex) {
            numbers[bottomIndex] = divider;
            break;
        }
        numbers[bottomIndex] = numbers[topIndex];

        bottomIndex += 1;
        while(numbers[bottomIndex] <= divider && topIndex > bottomIndex) {
            bottomIndex += 1;
        }
        if (topIndex <= bottomIndex) {
            bottomIndex = topIndex;
            numbers[topIndex] = divider;
            break;
        }
        numbers[topIndex] = numbers[bottomIndex];

    }

    quickSortInPlace(numbers, start, bottomIndex - 1);
    quickSortInPlace(numbers, bottomIndex + 1, end);

    return numbers;
}


let arr = [3, -4, -7, 48, 14, -9, 2, 5, 4, -10, -12, 23, 1];
let result = quickSortInPlace(arr);
console.log(result);


