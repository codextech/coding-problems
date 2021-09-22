// Source: https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/


// Maximum and minimum of an array using minimum number of comparisons

/* 
Input :  arr = [1000, 11, 445, 1, 330, 3000]
Output : max = 3000 , min = 1
*/

/* ================= SOLUTION ================= */
/* 

Time Complexity : O(n)

Algo has two part
1- find min and max from array.
2- should be minimum comparison 
*/

function maxAndMinNumberFromArray(arr) {
  /* >>>>>>>>>>>>>> It only Covers the First Part <<<<<<<<<<<<<<< */
  //  find max
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//       //    means next element is max not current so replace it
//       max = arr[i];
//     }
//   }
//   // find min
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//       // means next element is minimun, not current so replace it
//       min = arr[i];
//     }
//   }

  /* >>>>>>>>>>>>>> This Solution Covers the both part <<<<<<<<<<<<<<< */

  /*     suppose first two elements of array is min and max 
        then we can start from 2nd index of array to compare
 */

  let min, max;
  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (min > arr[i]) {
      /* means next element is minimun, not current so replace it */
      min = arr[i];
    } else if (max < arr[i]) {
      /* means next element is max not current so replace it */
      max = arr[i];
    }
  }

  return `max is : ${max}   & min is : ${min}`;
}

const result = maxAndMinNumberFromArray([5, 11, 1, 3, 40, 30]);
console.log(result);
