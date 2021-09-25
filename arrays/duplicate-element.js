// Source : https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1

/* 
Given an array a[] of size N which contains 
elements from 0 to N-1, 
you need to find all the elements occurring more than once 
in the given array.

Example:

Input:
N = 5
a[] = {2,3,1,2,3}
Output: 2 3 
Explanation: 2 and 3 occur more than once
in the given array.

*/


function solution(arr, k) {
    
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i+1; j < arr.length; j++) {
            
            if (arr[i] == arr[j]) {
                console.log(arr[i]);
            }
            
        }
    }


}

// console.log(solution([2,3,1,2,3]));

solution([2,3,1,2,3])





