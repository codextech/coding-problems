// source :https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1

/* 
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.


*/

function solution(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp = arr[i]
            console.log(arr[i] , '?? ' ,  arr[j]);
            if (arr[i] < arr[j]) {
                arr[i] = arr[j];
                arr[j] = temp;
            console.log(arr[i] , '>>> ' ,  arr[j]);

            }
        }
        
    }
    console.log(arr);
}


solution([0, 2, 1 ,2,0])

