//javascript functions
/*** 
 * Problem Statement: Write a Program that defines a function to 
 * calculate the sum of two integers and prints the result. Call this 
 * function by passing two integer values.
* */ 

function calculateSum(num1, num2) {
    const result = num1 + num2;
    console.log(result);
}

calculateSum(29, 99);
calculateSum(-25, 100);


/**
 * Problem Statement: Write a function that takes an integer and returns its square. 
 * Call this function and prints the result. Square(x) is 
 * a function that computes the square of a number. It returns the result instead of printing it.
 */

function calculateSquare(num) {
    const res = num * num;
    return res;
}

let resultSq = calculateSquare(9);
console.log("The Square is ",resultSq);


/**
 * Problem Statement: Write a program that accepts a number (age) and checks whether the person 
 * is eligible to vote. A person is eligible if their age is 18 or more.
 */

function eligibilityVotingCheck(age) {
    if(age < 0) {
        console.log("Invalid Input")
    } else if (age < 18) {
        console.log("You are not eligible to vote.")
    } else {
        console.log("You are eligible to vote.")
    }
}

eligibilityVotingCheck(17);
eligibilityVotingCheck(20);
eligibilityVotingCheck(-25);

/**
 * Problem Statement: Write a function that accepts a number and checks whether it is Even or Odd. 
 * If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the 
 * function with inputs 18 and 5.
 */

function evenOrOddFind(num) {
    const rem = num % 2;
    if(rem === 0) {
        console.log("Even number");
    } else {
        console.log("Odd Number");
    }
}

evenOrOddFind(22);
evenOrOddFind(99);