//create an object
const student = {
    Name : "Mayank",
    Marks :{
        Science : 100,
        Maths : 96,
        English : 98
    }
}


//Access nested object values
console.log(student.Name) //Mayank
console.log(student.Marks.Science) //100
console.log(student.Marks.Maths) //96
console.log(student.Marks.English) //98


//Update nested object values
student.Marks.Science = 99
console.log(student.Marks.Science) //99


//Deleting nested object values
delete student.Marks.Science
console.log(student.Marks.Science) //undefined
