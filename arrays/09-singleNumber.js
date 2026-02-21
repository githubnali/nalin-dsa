/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
   You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

//Approach-01 (brute force Hashmap)
function singleNumber(nums) {
    let hash = {};

    for (let i=0; i < nums.length; i++) {
        if(!hash[nums[i]])  {
            hash[nums[i]] = 1;
        }else {
            hash[nums[i]]++;
        }
    }

    for (let i=0; i < nums.length; i++) {
        if(hash[nums[i]] == 1) {
            return nums[i];
        }
    }
}   

console.log(singleNumber([4,1,2,2,4,5,1]));

//Approach-02
function singleNumberXor(nums) {
    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i]
    }

    return xor;
}

console.log(singleNumberXor([4,2,1,0,5]));
console.log(singleNumberXor([1]));