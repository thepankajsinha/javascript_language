//Create array
const marks = [5,10,15,20,25]

const fruits = ["Apple", "Mango", "Banana", "Guava"]

//Print output
console.log(fruits)
//[ 'Apple', 'Mango', 'Banana', 'Guava' ]


//Access an array element
console.log(fruits[1])
//Mango


//Update an array element
fruits[0] = "Watermelon"
console.log(fruits[0])
//Watermelon


//Print each element of array
for (let i of fruits) {
    console.log(i)   
}

// Watermelon
// Mango
// Banana
// Guava
