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
function longestWordNoPunctuation (input) {
  // Remove any punctuation found in the input parameter using Regex
  var inputNoPunctuation = input.replace(/[.,\-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  
  // declare a new array wordArray and populate it the input split at the spaces
  var wordArray = inputNoPunctuation.split(" ");
  
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

longestWordNoPunctuation ("I am long.");
longestWordNoPunctuation ("We go.");

// Write a function that returns ten lines. 
// On the first line there is one '#' character. On the second there are two. And so on. 
// This will create a nice triangle

function pyramid (numOfLines) {
  var line = "";
  for (i = 0; i < numOfLines; i++) {
    line += "#";
    console.log(line);
  }
}

console.log("Test1")
pyramid (1);
console.log("Test2")
pyramid (3);
console.log("Test3")
pyramid (10);

// Refactor the above function (on a new branch) so that it creates a triangle where the point is in the middle

function pyramid2 (numOfLines) {
  var lineUp = ""; //lineup stores all the # printed on the way up the pyramid
  // loop through the first half of the lines and add #'s to the output
  for (i = 0; i < (numOfLines/2); i++) {
    lineUp += "#";
    console.log(lineUp);
  }
  // declare a variable to work down the pyramid starting with the num of #'s you ended on
  var lineDown = lineUp;
  
  // If there are an even number of lines print the top again.
  if (numOfLines % 2 === 0) {console.log(lineDown)}
  
  for (i = Math.ceil(numOfLines/2); i > 0; i--) {
    // slice the end off of the #'s as you lop through the lines
    lineDown = lineDown.slice(0, (lineDown.length-1));
    console.log(lineDown);
  }
}

console.log("Test1")
pyramid2 (3);
console.log("Test2")
pyramid2 (10);


// Write a function that takes a dollar amount and a discount percentage and returns the total discount amount. Return a warning if the discount amount is greater than 100 or less that 0 percent

function discount(amount, discountPercentage) {
  // Check for discount values >100 or <0
  if (discountPercentage > 100) {
    console.log("Your discount is too big!");
  }
  else if (discountPercentage < 0) {
    console.log("Your discount is too small!");
  }
  else {
    // Calcualte the totalDiscountAmount
    var totalDiscountAmount = amount * discountPercentage/100;
    // Round the totalDiscountAmount to two decimal places
    var totalDiscountAmountRound = (totalDiscountAmount).toFixed(2);
    // Print the discount to the console
    console.log("Your discount is: $" + totalDiscountAmountRound);
  }
}

console.log("Test1")
discount (3,10);
console.log("Test2")
discount (10, 15);
console.log("Test3")
discount (3,101);
console.log("Test4")
discount (10, -3);
