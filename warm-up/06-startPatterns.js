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

//Pattern:2  print increasing start in each row
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


//Pattern 3: Print a Right-Angled Number Triangle
console.log("-------Right-Angled Number Triangle-----------");
function printRightAngelNumber(n) {

    for (let i=0; i < n; i++) {
        row="";
        for (let j=0; j <=i; j++) {
            row +=  (j+1) + " "; 
        }
        console.log(row);
    }
}

printRightAngelNumber(4);


//Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
console.log("-------Right-Angled Number Repeated Numbers Triangle-----------");

function triangleRepeatedNums(n) {
    for (let i=0; i<n; i++) {
        row="";
        for (let j=0; j <= i; j++) {
            row += (i+1) + " ";
        }
        console.log(row);
    }
};

triangleRepeatedNums(4);


//Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
console.log("-------Reverse Right-Angled Triangle of Increasing Numbers-----------");

function reverseTriangleIncrease(n) {

    for (let i=0; i<n; i++) {
        row="";
        for(let j=0; j < n-i ;j++) {
            row += (j+1) + " ";
        }
        console.log(row);
    }
}

reverseTriangleIncrease(3);


//Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
console.log("-------Right-Aligned Right-Angled Triangle of Stars-----------");

function rightAngleTriangleStars(n) {

    for (let i=0; i<n;i++) {
        row = "";
        for (let j=0; j < n-(i+1) ;j++) {
            row += " " + " ";
        }

        for (let k=0; k < (i+1); k++) {
            row += "* "
        }

        console.log(row);
    }
}

rightAngleTriangleStars(5);


//Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
console.log("---------Right-Angled Triangle of Alternating 1s and 0s-----------");

function rightAngledAltering(n) {
    for (let i=0; i<n; i++) {
        let row = "";
        let toggle = 1;
        for (j=0; j<i+1; j++) {
           row += toggle + " ";
           toggle = toggle === 1 ? 0 : 1; 
        }
        console.log(row);
    }
}

rightAngledAltering(6);

//Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
console.log("---------Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)-----------")

function rightAngledAlteringGlobal(n) {
    let toggle = 1;
    for(let i=0; i<n; i++) {
        let row = "";
        for (let j=0; j < i+1; j++){
            row += toggle + " ";
            toggle = toggle === 1 ? 0 : 1;
        }
        console.log(row);
    }
}

rightAngledAlteringGlobal(5);

