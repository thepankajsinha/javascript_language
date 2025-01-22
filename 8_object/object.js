//1.Object is a data structure that allows you to store different types of data.

//2.Objects have key-value pairs, where keys are strings (or Symbols) and values can be of any type, including other objects, arrays, functions, etc.


//create an object
const student = {
    Name : "Mayank",
    Marks : 95,
    isPass : true,
    greet : function(){
        console.log("Hi my name is Mayank")
    }
}

//Iterate over object values
for (const key in student) {
    console.log(student[key])
}

//Mayank
//95
//true
//[Function: greet]


//Access object values
console.log(student.Name) //Mayank
console.log(student.Marks) //95
console.log(student.isPass) //true
console.log(student.greet()) //Hi my name is Mayank


//Update object values
student.Marks = 70
console.log(student.Marks) //70


//Deleting object values
delete student.Marks
console.log(student.Marks) //undefined
