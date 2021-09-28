// Source : https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1

/* 

Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.



EXAMPLE #1
Input:
5 3
1 2 3 4 5
1 2 3
Output: 
5
Explanation: 
1, 2, 3, 4 and 5 are the
elements which comes in the union set
of both arrays. So count is 5.
------------------------------------------------------
EXAMPLE #2
Input:
6 2 
85 25 1 32 54 6
85 2 
Output: 
7
*/



function solution(array1, array2) {

 
    /* we can do via hashing or set */

    distinctElements = {}

    /* for array 1 */
    addKeyToObject(array1, distinctElements);

        /* for array 2 */
        addKeyToObject(array2, distinctElements);

   

    let finalArray = []
    for (const key in distinctElements) {
        finalArray.push(key)
    }
    return finalArray.length;
    
}

function addKeyToObject(array, obj) {
    for (let index = 0; index < array.length; index++) {
        let key = array[index];
        if (!distinctElements[key]) {
            distinctElements[key] =  array[index]
        }
        
    }
}

const result = solution([85, 25, 1, 32, 54, 6] , [85,2]);

console.log(result);
