"use strict";

function binarySearch(arr, searchNumber, minIndex = 0, maxIndex = arr.length - 1) {
    if ( minIndex > maxIndex ) {
        return -1;
    }

    const middleIndex = Math.floor((minIndex + maxIndex) / 2);
    const middleNumber = arr[middleIndex];

    if (middleNumber < searchNumber) {
        return binarySearch(arr, searchNumber, middleIndex + 1, maxIndex);
    }

    if (middleNumber > searchNumber) {
        return binarySearch(arr, searchNumber, minIndex, middleIndex - 1);
    }

    return middleIndex;
}

module.exports = { binarySearch };

