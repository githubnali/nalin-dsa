/**
 * Write a program to print all even numbers from an array.
 */

const numArray = [10, 3, 5, 0, 88, 29, 30, 6,9];

for(let i = 0; i < numArray.length; i++) {
    if(numArray[i] % 2 === 0) {
        console.log(numArray[i])
    }
}