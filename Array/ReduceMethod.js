//Purpose: Executes a reducer function on each element of the array, resulting in a single output value.

//Returns: A single value (like a sum, product, or any aggregate).

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0); // 15

console.log(sum); // Output: 15
