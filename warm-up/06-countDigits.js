/**
 * Problem: write a function  countDigits that takes an integer n and return 
 * how many digits it contains
 * corner cases:
 * what if number is 0
 * what if number is negative number
 */

function countDigits(n) {
    let count = 0;

    //handle if number is 0
    if(n === 0 ) return 1;

    
    //handle neagtive number
    n = Math.abs(n);

    while (n > 0) {
        n = Math.floor(n/10);
       count = count + 1;
    }

    return count;
}


console.log(countDigits(0));

console.log(countDigits(-76867));

console.log(countDigits(259));

console.log(countDigits(9182131863));
