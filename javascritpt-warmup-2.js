/* Warmup Exercises | January 12, 2016 */
/* A palindrome is a string of characters that is the same when read forwards or backwards. These can be words, gibberish or even complete sentences. A few examples would be, racecar, lion oil, 12321.

Create a function called palindrome that:

Takes a single argument, a string
Returns true or false if the word is a palindrome
Ignores spaces and capitalization of the words
*/

function palindrome2(text) {
  var str = String(text) //Convert to string
  var str = text.replace(/\s+/g, ''); //Use regex to remove spaces
  var str = str.toLowerCase(); //Convert to lowercase
//  console.log("this is str: ",str)
  var rev = str.split('').reverse().join(''); //reverse the letters
//  console.log("this is rev: ",rev) 
  if ( rev === str ) {console.log("true");} //Check for palindrome
  else {console.log("false")}
  }
  

function palindrome(text) {
  var str = String(text) //Convert to string
  var str = text.replace(/\s+/g, ''); //Use regex to remove spaces
  var str = str.toLowerCase(); //Convert to lowercase
  console.log("this is str: ",str)
//reverse the letters
var rev = "";
  function reverse(str) {
    var revChar = [];
    for (var i = 1, len = str.length; i <= str.length; i++) {
      revChar.push(str.charAt(len - i));
      console.log("this is rev: ",revChar); 
    }
    for (i = 0; i < revChar.length; i++) {
      var rev = rev + revChar[i];
      console.log(rev);  
    } 
  }
  var rts = rev.toLowerCase();
  if ( rts === str ) {console.log("true");} //Check for palindrome
  else {console.log("false")}

}   
  
palindrome("A man a plan a canal Panama");
palindrome("Dennis");

palindrome2("A man a plan a canal Panama");
palindrome2("Dennis");


function convertToUpperCaseStringNoSpaces(text) {
  var str = String(text).replace(/\s+/g, ''); //Convert to string and Use regex to remove spaces
  var str = str.toUpperCase(); //Convert to lowercase
//  console.log("this is str: ",str)
}

function reverseString(input) {
  var arrReverseCharacters = [];
  var reverse = "";
    for (var i = 1, length = input.length; i <= input.length; i++) {
      arrReverseCharacters.push(input.charAt(length - i));
//      console.log("this is rev: ",arrReverseCharacters); 
    }
    for (i = 0; i < arrReverseCharacters.length; i++) {
      var reverse = reverse + arrReverseCharacters[i];
//      console.log(reverse);  
    } 
}

