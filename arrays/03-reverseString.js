/**
 * Problem Statement
 * Write a function that reverses a string. The input string is given as an array of characters s. 
 * You must do this by modifying the input array in-place with O(1)extra memory.
 */

function reverseString(str) {
    let len = str.length;
    let halfLen = Math.floor(len/2);

    for (let i = 0; i < halfLen; i++) {
        let temp = str[i];
        str[i] = str[len-i-1];
        str[len-i-1] = temp
    }

    return str;

}

console.log(reverseString(['n','a','g','a','r','a','j','u']))
console.log(reverseString(['n','a','l','i']))