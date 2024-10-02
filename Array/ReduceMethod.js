//Purpose: Executes a reducer function on each element of the array, resulting in a single output value.

//Returns: A single value (like a sum, product, or any aggregate).

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((prev, curr) => {return prev + curr})


//Output
console.log(sum);
//15

//original array
console.log(numbers)
//[ 1, 2, 3, 4, 5 ]
