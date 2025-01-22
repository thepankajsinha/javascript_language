//filter Method

//It is used to executes a given function once for each element in the array
//It return a new array containing only the elements that satisfy the condition.
//It does not change in original array

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0)

//Resultant array
console.log(evens);
//[2, 4]


//Original array
console.log(numbers)
//[ 1, 2, 3, 4, 5 ]