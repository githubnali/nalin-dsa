/*
Find the second largest number in an array.
*/

/**
 * corner cases
 * what if the array has empty []
 * what if array has only 1 elemnt [30]
 * what if array has duplicate numbers [10, 20, 4, 5, 6, 20, 10, 30]
 * what if array has mix of negative numbers and positive numbers [10, -2, 6, 9, 0, -100, -30]
 * what if array has all same numbers like [2,2,2,2]
 */


function secondLargest(arr) {
    if (arr.length < 2) {
        return "Arry should have at least two numbers"
    }

    let firstLarge = -Infinity;
    let secondLarge = -Infinity;

    for (let i = 0; i < arr.length; i++) { 

        if(arr[i] > firstLarge ) {
            secondLarge = firstLarge;
            firstLarge = arr[i]
        } else if (arr[i] > secondLarge && arr[i] !== firstLarge) {
            secondLarge = arr[i]
        }
    }

    return secondLarge === -Infinity ? "No second largest found" : secondLarge;
}

const arr = ([10, 20, 4, 5, 6, 20, 10, 30]);

const result = secondLargest(arr);

console.log(result)