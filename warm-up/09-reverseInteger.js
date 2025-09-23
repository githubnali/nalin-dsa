/**
 * problem statement: Write a function reverse(x) that takes a 32-bit signed integer and returns 
 * its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.
 * corner cases
 * #handling the negative case numbers
 * #handling the 32 bit signed integer 2**31
 */

function reverse(n) {
    const nCopy = n;

    n = Math.abs(nCopy);

    let reverse = 0;

    while (n > 0) {
        let lastNum = n % 10;

        reverse = (10 * reverse) + lastNum;

        n = Math.floor(n/10);
    }

    if (reverse > 2**31 -1) return 0;

    return (nCopy < 0) ? -reverse : reverse;
}

console.log(reverse(4321));
console.log(reverse(-2345))
console.log(reverse(1534236469))