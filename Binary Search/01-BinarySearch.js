
/*
Given an array of integers nums which is sorted
in ascending order, and an integer target,
write a function to search target in nums. If target
exists, then return its index. Otherwise, return -1.

You must write an algorithn with O(log n). run time
complexity.
*/

function binarySearch(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mind = Math.floor((left + right) / 2);
        if(nums[mind] === target){
            return mind;
        } else if (nums[mind] < target){
            left = mind + 1;
        } else {
            right = mind - 1;
        }
    }
    return -1;
}

console.log(binarySearch([-1,0,3,5,9,12], 3));

function search(nums, target){
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(search([-1,0,3,5,9,12], 3));