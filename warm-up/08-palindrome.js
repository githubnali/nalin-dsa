/**
 * Problem: Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.
 */


function palindrome(n) {

    if(n < 0) return false;

    const numCopy = n;

    let reverse = 0;

    while(n > 0) {
        rem = n % 10;

        reverse = (10 * reverse) + rem;

        n = Math.floor(n/10);
    }

    if(reverse == numCopy) {
        return true;
    }else {
        return false;
    }

    //better writing
    return reverse === numCopy;
}

console.log(palindrome(121));
console.log(palindrome(-121));
console.log(palindrome(10));