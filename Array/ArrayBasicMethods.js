const fruits = ["Apple", "Mango", "Banana", "Guava"]

//add element at the end
fruits.push("Pineapple")
console.log(fruits)
//[ 'Apple', 'Mango', 'Banana', 'Guava', 'Pineapple' ]


//add element at start
fruits.unshift("Papaya")
console.log(fruits)
//[ 'Papaya', 'Apple', 'Mango', 'Banana', 'Guava', 'Pineapple' ]


//remove element from end
fruits.pop()
console.log(fruits)
//[ 'Papaya', 'Apple', 'Mango', 'Banana', 'Guava' ]


//remove from start
fruits.shift()
console.log(fruits)
//[ 'Apple', 'Mango', 'Banana', 'Guava' ]