//Purpose: Transforms each element in an array according to a specified function.

//Returns: A new array containing the results of applying the function to each element.

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);

console.log(squared);
//[1, 4, 9, 16, 25]
