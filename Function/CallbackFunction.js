//Callback Function :
//A function is a callback function if it passed as an argument to another function.

//base function
const calculate = (num, operation) => {
    return operation(num)
}

//callback function 
const square = (num)=> num*num

//pass callback function in base function
const ans = calculate(5,square)
console.log(ans)
//25