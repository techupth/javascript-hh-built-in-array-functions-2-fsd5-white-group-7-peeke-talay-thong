function isPalindrome(string) {
  // Start coding here
  let reverseString = string.split("").reverse().join("");
  console.log(reverseString);
  return string == reverseString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
