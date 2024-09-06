"use strict";
// 100 Days Of Coding Challenge!
/** Question 122:
Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.*/
//-----------------------------------------------------------------------------------
// while loop to count down from 10 to 1
let j = 10; // Initialize j to 10
while (j > 0) { // Continue the loop as long as j is greater than 0
    // If j is 5, break the loop
    if (j === 5) {
        break; // Exit the loop
    }
    console.log(j); // Print the current value of j
    j--; // Decrement j by 1
}
