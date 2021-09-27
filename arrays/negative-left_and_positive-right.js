// Source : https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

/* 

Move all negative 
numbers to beginning and 
positive to end with constant extra space

Input: -12, 11, 14 , -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5

*/

function solution(array) {
  let positiveNumberIndex_toBeSwaped = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      /* KEY POINT */
      /*   as if we found a negative number but also 
            wanted to be sure if we left any +ve number behind if so we will swap \
            that +ve number to our current -ve number 
             */
      // if index and positiveNumberIndex_toBeSwaped is queal it means no +ve number came yet in array
      if (index != positiveNumberIndex_toBeSwaped) {
        // if its not equal then swap form its next elemnt;
        const temp = array[positiveNumberIndex_toBeSwaped];
        array[positiveNumberIndex_toBeSwaped] = array[index];
        array[index] = temp;
      }
      positiveNumberIndex_toBeSwaped++;
    }
  }
  console.log(array);

  /* With String Comparison but not Constant Extra space */

  // const negativeArray = []
  // const positivetiveArray = []
  // let startNegativeArray = 0;
  // let startPositiveArray = 0;
  // for (let index = 0; index < array.length; index++) {
  //     if (String(array[index])[0]  == '-') {
  //         negativeArray[startNegativeArray] = array[index];
  //         startNegativeArray++
  //     }else {
  //         positivetiveArray[startPositiveArray] = array[index];
  //         startPositiveArray++
  //     }

  // }

  // const finalArray = [...negativeArray];
  // const a =(negativeArray.length);
  // for (let index = 0; index < positivetiveArray.length; index++) {
  //     finalArray[a + index] = positivetiveArray[index];

  // }

  // console.log(negativeArray);
  // console.log(positivetiveArray);
  // console.log(finalArray);
}

solution([-12, 11, 14, -13, -5, 6, -7, 5, -3, -6]);
