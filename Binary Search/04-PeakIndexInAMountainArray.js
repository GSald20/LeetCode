/* 
Let's call an array arr a mountain if the following
properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 
such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed 
to be a mountain, return any i such that 
arr[0] < arr[1] < ... arr[i - 1] < arr[i] > 
arr[i + 1] > ... > arr[arr.length - 1].
*/

function peakIndexInMountainArray (arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] < arr[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
}