"use strict";

function bubbleSort(numbers) {
    let notSorted = true;

    while(notSorted) {
        notSorted = false;

        for ( let i = 1; i < numbers.length; i++) {
            const prev = numbers[i - 1];
            const current = numbers[i];

            if (current < prev) {
                numbers[i] = prev;
                numbers[i - 1] = current;

                notSorted = true;
            }
        }
    }
    return numbers;
}

module.exports = { bubbleSort };