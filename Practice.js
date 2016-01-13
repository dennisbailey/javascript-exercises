// Practice, practice, practice
// Write a function that takes a string and returns the longest word in the string

// Decalre the function longestWord that accepts one input
function longestWord (input) {
  var wordArray = input.split(" "); //an array to hold the split words
//  console.log(wordArray);
  
  // An array to hold the length of words
  var wordLengthArray = []; // An array to hold word lengths
  for (i = 0; i < wordArray.length; i++) {  
    var wordLength = wordArray[i].length
    wordLengthArray.push(wordLength);
//    console.log(wordLengthArray);
  }
  
  //Find the greatest value in the word length array
  var longestWordPosition = 0;
  var longestWordValue = 0;
  for (i = 0; i < wordLengthArray.length; i++) {
    if (wordLengthArray[i] > longestWordValue) {
      longestWordValue = wordLengthArray[i];
      longestWordPosition = i;
    }
  }
  
  //Return the longest word
  console.log(wordArray[longestWordPosition]); 
}

longestWord ("I am long");
longestWord ("What if this is the longer word");

// Refactor the above function (on a new branch) so that it ignores punctuation


//Write a function that returns ten lines. 
// On the first line there is one '#' character. On the second there are two. And so on. 
// This will create a nice triangle



// Refactor the above function (on a new branch) so that it creates a triangle where the point is in the middle



// Write a function that takes a dollar amount and a discount percentage and returns the total discount amount. Return a warning if the discount amount is greater than 100 or less that 0 percent