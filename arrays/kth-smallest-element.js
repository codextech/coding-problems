// Source: https://www.cdn.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/

/* #################### PROBLEM #################### */

/* 
Given an array arr[] and an integer K where K is smaller than size of array,
 the task is to find the Kth smallest element in the given array. 
 It is given that all array elements are distinct.
 Example 1:

Input:
N = 6
arr[] = 7 10 4 3 20 15
K = 3
Output : 7
Explanation :
3rd smallest element in the given 
array is 7.
*/




function solution(arr, k) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp = arr[i]
            if (arr[i] < arr[j]) {
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
    }
    console.log(arr);

    return arr[k-1]
}

const result = solution([7, 10, 4, 3, 20, 15], 4)
console.log(result);






