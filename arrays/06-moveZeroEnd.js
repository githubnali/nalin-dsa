/**
 * 
 */

function moveZerosEnd(arr){
    let x = 0;

    for (let i=0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[x] = arr[i];
            x++;
        }
    }

    //after replaced all zeros
    for (let i = x; i < arr.length; i++) {
        arr[i] = 0;
    }

    console.log(arr);
}

moveZerosEnd([1, 0, 2, 0, 3, 0, 6, 0, 10, 20, 0]);
moveZerosEnd([1,2,3,4,5]);
moveZerosEnd([100, 200, 0, 100, 0, 0, 0,1010]);
moveZerosEnd([0,0,0,0]);