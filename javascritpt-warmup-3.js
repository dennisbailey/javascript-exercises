// Generate a random number from 1000 to 9999 and output the sum of its digits.
// For example, if the number is 1049, then the output should be 14.


// Create a function generateRandomNum to generate a random number from 1000 to 9999
function generateRandomNum() {
  // Declare the variable randomNum and set it equal to a random number * 10,000
  // Round the random number up to the nearest integar
  var randomNum = Math.ceil(Math.random() * 10000);
  // Check for a random generation of zero
  if (randomNum === 0) {randomNum = 1000;}
  console.log(randomNum);
  return randomNum;
}

// Create a function to find the sum of the digits
function sumDigits (input) {
  // Find the value of the ones place
  var ones = input % 10;
  // Back the ones out of the value
  input = input - ones;
  //Find the value of the tens place
  var tens = input % 100 / 10;
  // Back the tens out of the value
  input = input - tens * 10;
  // Find the value of the hundreds place
  var hundreds = input % 1000 / 100;
  // Back the hundreds out of the value
  input = input - hundreds * 100;
  // Find the value of the thousands place
  var thousands = input % 10000 / 1000;
  
  // Sum the digits
  var sumOfDigits = thousands + hundreds + tens + ones;
  
  console.log(sumOfDigits);
}

sumDigits(generateRandomNum());

// Declare a function sumArray with a single input parameter
function sumArray (input) {
  arrDigitsToSum = input;
  var sum = 0;
  for (i = 0; i < arrDigitsToSum.length; i++) {
    sum = sum + parseInt(arrDigitsToSum[i]);
  }
  return sum;
}

function sumDigitsFromString (input) {
// Decalare digitToString
// set it equal to the input parameter converted to a string
  var digitToString = input.toString();
  console.log(digitToString)
// Declare an empty array arrDigits
  var arrDigits = [];
// Loop through the digitToString and push each character to arrDigits
  for (i = 0; i < digitToString.length; i++) {
    var pushVal = digitToString.charAt(i);
    console.log(pushVal)
    arrDigits.push(pushVal);
  }
  console.log(arrDigits);
} 
  
  do {
// Call the sumArray function to convert to integers 
// and sum the contents of arrDigits
// Print the sum to the log
  console.log(sumArray(arrDigits));
// Remove the first value from arrDigits
  arrDigits = arrDigits.shift();
  }
  while (arrDigits.length > 0);
}

sumDigitsFromString (1234);

// Generate a random number from 1000 to 9999 and output the sum of its digits, repeatedly, dropping the left-most digit after each iteration, until there is only one digit only.
//For example, if the number is 1049, then the output should be 14, 13, 13, 9.


// Reverse engineer with a group member