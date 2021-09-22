// Source:https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/


// Write a program to reverse an array;
/* 
Input :  arr = [4, 5, 1, 2]
Output : arr = [2, 1, 5, 4]
*/

/* ================= SOLUTION ================= */

// we have to loop through each elemnt to change the position of element
/* >>>> TIME COMPLEXISTY : O(n) <<<< */

function reverseArray(arr) {
  
    let arrayStart = 0; 
    let arrayEnd = arr.length-1;

    /* read it from both side and swap the element */

    while(arrayStart < arrayEnd) {
        let temp = arr[arrayEnd];
        /* swap */
        arr[arrayEnd] = arr[arrayStart];
        arr[arrayStart] = temp;
        /* incriment to read next element */
        arrayStart++;
        /* decriment to read previous element */
        arrayEnd--;
    }

    return arr;
}

// call function
const result  = reverseArray([4, 5, 1, 2])
console.log(result);