const reverseString = function (word) {
  /* original solution
  
  const wordArray = word.split("");
  let reversedWord = "";
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reversedWord += wordArray[i];
  }
  return reversedWord;
   */
  return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
