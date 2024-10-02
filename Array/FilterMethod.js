//Purpose: Creates a new array with elements that pass a test implemented by a provided function.

//Returns: A new array containing only the elements that satisfy the condition.

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0)

console.log(evens);
//[2, 4]
