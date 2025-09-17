/**
 * Problem 1
 * write a function that searches for an element in an array and return the index, if 
 * the element is not found return -1
 */

function findIndex(arr1, num) {
    //loop through the array
    for (let i =0; i < arr1.length; i++) {
        if(arr1[i] === num) {   
            return i;
        } 
    }
    return -1;
}

let arr1 = [40, 2, 5, 6, 8, 90, 3, 7];

console.log(findIndex(arr1, 90)) //should return 5
console.log(findIndex(arr1, 7)) //should return 1
console.log(findIndex(arr1, 100)) //should return -1



/**
 * Problem 2
 * write a function that return number of negative values in an array
 */

function countNegativeVlaues(numArray) {
    let count = 0;
    for (let i = 0; i <numArray.length; i++) {
        if(numArray[i] < 0) {
            count++;
        }
    }
    return count;
}

const numArray1 = [10, -3, 5, 0, -88, 29, -30, 6];

const numArray2 = [-10, -3, -5, -0, -88, -29, -30, -6];

console.log(countNegativeVlaues(numArray1)) //should return 4

console.log(countNegativeVlaues(numArray2)) //should return 8

/**
 * problem 3
 * write afunction that return the largest number in an array
 */


function findLargetstNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}

const arr2 = [20, 78, 90, 7000, 456, 9999999, 10000, 500, -1000];

console.log(findLargetstNumber(arr2)); //9999999

console.log(findSmallestNumber(arr2)) //20

console.log(findSmallestNumber([-20, -78, -90, -7000, -456, -9999999, -10000, -500, -1000])) //-9999999