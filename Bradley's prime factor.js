// Declare function primeFactors with one input parameter
function primeFactors (num) {
  // Declare input and set it equal to the input parameter
    var input = num;
  // Declare the variable factors and set it equal to an empty array  
    var factors = [];
  // Starting at 2 increment up by 1 to the input parametre value to check for factors  
    for (var i = 2; i <= input; i++) {
      // If a factor is present, push it to the factors array
      // Reset the input to input / the found factor
        while(input % i === 0 && input !== 1) {
            factors.push(i);
            input = input/i;
        }
    }
    return factors;
}