// 100 Days Of Coding Challenge!

/** Question 121:
Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.*/

//-----------------------------------------------------------------------------------------------

// for loop that counts from 1 to 10
for (let i = 1; i <= 10; i++) {
    // If i is 5, skip this iteration
    if (i === 5) {
        continue; // Skip the rest of the loop and move to the next iteration
    }
    console.log(i); // Print the current value of i
}
