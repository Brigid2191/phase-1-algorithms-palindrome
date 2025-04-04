// index.js

/*
Pseudocode:
1. Define a function isPalindrome that takes a string as input.
2. Reverse the string.
3. Compare the reversed string to the original string.
4. If they are the same, return true (it is a palindrome).
5. Otherwise, return false.
*/

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Reverse the string and compare with the original
  return str === str.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("noon")); // true

// Export function for testing
module.exports = isPalindrome;
