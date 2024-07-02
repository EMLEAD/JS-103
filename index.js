//Function to know if a number is a prime number
function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  console.log(isPrime(6));

// Function to find the sum of an array
  function sumArray(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
var numbers = [1, 2, 3, 4, 5];
var result = sumArray(numbers);
console.log(result);

//Function to reverse a string
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('Adewale Moses'));


//function to know the Area of a circle
function areaOfCircle (radius){
return (Math.PI*radius**2)

}

console.log(areaOfCircle(3));