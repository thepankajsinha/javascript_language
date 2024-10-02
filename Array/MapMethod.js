//map Method
//It is used to executes a given function once for each element in the array
//It return a new array containing the results of applying the function to each element.
//It does not change in original array


const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);

//Resultant array
console.log(squared);
//[1, 4, 9, 16, 25]

////Original array
console.log(numbers)
//[ 1, 2, 3, 4, 5 ]
