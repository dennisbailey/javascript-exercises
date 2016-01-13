// Practice, practice, practice
// Write a function that takes a string and returns the longest word in the string

// Declare the function longestWord that accepts one input
function longestWord (input) {
  // declare a new array wordArray and populate it the input split at the spaces
  var wordArray = input.split(" ");
  
  // Declare an array called wordLengthArray that holds the lengths of each word
  var wordLengthArray = [];
  // Create a loop that loops through the values in wordArray
  for (i = 0; i < wordArray.length; i++) {
    // Declare a variable wordLength and set it to the lenght of each value in wordArray  
    var wordLength = wordArray[i].length
    // Push value of wordLength to the wordLengthArray
    wordLengthArray.push(wordLength);
  }
  
  // Find the greatest value in the word length array
  // Declare longestWordPosiiton and set a default value of zero
  var longestWordPosition = 0;
  // Declare longestWordLength and set a default value of zero
  var longestWordLength = 0;
  // Loop through each value of wordLengthArray
  for (i = 0; i < wordLengthArray.length; i++) {
    // Compare the word length in the wordLengthArray with the sotred value of the longest word in the array
    if (wordLengthArray[i] > longestWordLength) {
      // If the current iteration of the loop is > than the longest word length 
      // set longestWordLength to the new value from wordLengthArray
      longestWordLength = wordLengthArray[i];
      // Store the position of the longest word based on the current iteration
      longestWordPosition = i;
    }
  }
  
  // Print to the console the longet word by referencing the wordArray using the position found in the variable longestWordPosition
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