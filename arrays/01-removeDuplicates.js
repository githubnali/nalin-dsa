/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
*/

function removeDuplicates(num) {
    let x = 0;

    for (let i=0; i < num.length; i++) {
        if(num[i] > num[x]) {
            x++;
            num[x] = num[i];
        }
    }
    return x + 1;

}

console.log(removeDuplicates([0,0,0,1,2,3,1,2,3,]))
console.log(removeDuplicates([1,2,2,3,]))
