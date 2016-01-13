/* Warmup Exercises | January 12, 2016 */
/* Generate to integers */
var num1 = (Math.floor(Math.random()*10)+1);
var num2 = (Math.floor(Math.random()*10)+1);
console.log(num1);
console.log(num2);

/* Find the mean of two numbers */
function mean (num1, num2) {
    var result = (num1 + num2)/2;
    console.log("The mean is " + result);
}

mean(num1,num2);

/* Find the variance of two numbers */
function varianceCalc(num1, num2) { 
    variance = ((num1 * num1) + (num2 * num2))/2;
    console.log("The variance is " + variance);
}

varianceCalc(num1, num2);

/* Calculate standard deviation as the sqrt of the variance */
function stddev(variance) {
    var result = Math.sqrt(variance);
    console.log("The standard deviaiton is", result);
}

stddev(variance);

/* Generate a single random number, from 0 to 100, 
   then output all the even integers from 0 to the random number. */
var num1 = Math.floor(Math.random()*100);
console.log("Your random numer is " + num1);

for (var i = num1; i <= 100; i++) {
  if (i % 2 === 0)
  console.log(i);
}


/* Generate a single random number, from 0 to 100. 
   If the number is greater than 40 
     output all the odd integers from 40 to the random number. 
   If the number is less than 40, output all the odd integers from 0 to 40. */
   
var num1 = Math.floor(Math.random()*100);
console.log("Your random numer is " + num1);

function gtForty(num) {
    for (var i = 40; i <= num; i++) {
        if (i % 2 === 1)
        console.log(i);
    }
}

function ltForty(num) {
    for (var i = num; i < 40; i++) {
  if (i % 2 === 1)
  console.log(i);
  }
}

if (num1 < 40) ltForty(num1);
 else if (num1 > 40) gtForty(num1);
 else console.log("You got 40! I don't know what to do!");
   
/* Generate twenty random integers from 0 to 100 
   and print the largest and smallest integers.   */
 
var arrayRandos = []; 

for (var i = 0; i < 20; i++) {
  arrayRandos.push(Math.floor(Math.random()*100));
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

console.log(arrayRandos);
console.log(arrayRandos.length);

console.log("The max value is", getMaxOfArray(arrayRandos));
console.log("The min value is", getMinOfArray(arrayRandos));
