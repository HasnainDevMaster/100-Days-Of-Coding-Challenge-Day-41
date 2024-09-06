"use strict";
// 100 Days Of Coding Challenge!
/** Question 123:
Create a loop that iterates through a string and stops when it finds the first vowel.*/
//--------------------------------------------------------------------------------------
const str = "TypeScript"; // The string to iterate through
const vowels = "aeiouAEIOU"; // A string containing all vowels
// for loop to iterate through the string
for (let k = 0; k < str.length; k++) { // Loop through each character in the string
    // Check if the current character is a vowel
    if (vowels.includes(str[k])) {
        console.log(`First vowel found: ${str[k]}`); // Print the first vowel found
        break; // Exit the loop
    }
}
