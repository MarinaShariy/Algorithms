"use strict";

function interpolationSearch(arr, searchNumber, minIndex = 0, maxIndex = arr.length - 1) {

    const minNumber = arr[minIndex];
    const maxNumber = arr[maxIndex];
    const offsetFraction = (searchNumber - minNumber) / (maxNumber - minNumber);
    const middleIndex = Math.floor(minIndex + (maxIndex - minIndex) * offsetFraction);
    const middleNumber = arr[middleIndex];

    if (minNumber == searchNumber) {
        return minIndex;
    }

    if (minNumber == maxNumber && minNumber !== searchNumber) {
        return -1;
    }

    if (middleIndex < minIndex || middleIndex > maxIndex) {
        return -1;
    }

    if (middleNumber < searchNumber) {
        return interpolationSearch(arr, searchNumber, middleIndex + 1, maxIndex);
    }

    if (middleNumber > searchNumber) {
        return interpolationSearch(arr, searchNumber, minIndex, middleIndex - 1);
    }

    return middleIndex;
}

module.exports = { interpolationSearch };



