// Palindrome Checker
print ("Welcome to my palindrome checker!")

function stringWithOnlyAlphaNumeric(str) {
  // Takes a Regex and a replacement string
  return str.replace(/[\W_]/gi, "");
}

function stringLowercased(str){
  return str.toLowerCase();
}


const stringReversed = (str) => {
    let result = "";
    for (let i=str.length -1; i >=0; i--){
      result += str[i];
  }
  return result;
}

function palindrome(str) {
  // Remove non-alphanumeric characters
  const cleanedUpStr = stringWithOnlyAlphaNumeric(str);
  // Make string lowercase
  const lowerCaseStr = stringLowercased(cleanedUpStr);
  // Reverse the string
  const reversedStr = stringReversed(lowerCaseStr);
  // Return the comparison of:
  // Reversed strings are equal to? lowercased cleaned up string

  return lowerCaseStr == reversedStr;
}

palindrome("eye");
