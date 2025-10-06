/***
 * problem-1 let's print the 4*4 start metrics pattent
 */


console.log("--------print 4*4 start pattern--------")
//4*4 start pattern
function printStartMatrix(n) {

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j=0; j < n; j++) {
            row = row + "* "
        }
        console.log(row)
    }
}

printStartMatrix(4);

console.log("-------increasing start pattern-----------")

// print increasing start in each row
function printIncreasingStars(n) {

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < i+1; j++) {
            row = row+"* "
        }
        console.log(row);
    }
}

printIncreasingStars(5)