// Source : https://www.hackerrank.com/challenges/array-left-rotation/problem

/* ######## Left Rotation ##########

A left rotation operation on an array of size 
shifts each of the array's elements  unit to the left.
Given an integer, rotate the array that many steps left and 
return the result.
Example:
d= 4
arr = [1 ,2 ,3 ,4 ,5]
After  rotations.
arr = [5, 1, 2, 3, 4]
*/



function rotateLeft(d, array) {
    let n = array.length;
    for (let rotation = 0; rotation < d; rotation++) {
        const firstElement = array[0]; // 1
        for (let index = 0; index < n; index++) {
            array[index] = array[index+1]
        }
        // because last index has no value 
        array[array.length-1] = firstElement
    }
    console.log(array);
}

rotateLeft(3, [1 ,2 ,3 ,4 ,5])





