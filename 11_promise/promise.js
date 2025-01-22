//1.Promises are used to handle asynchronous tasks such as API calls where the result is not immediately available.
//2.It is better than callback hell.
//3.It makes asynchronous code easier to read and manage.


//Create promise
let p = new Promise((resolve, reject) => {
    let a = 2
    if(a==1){
        resolve("Success")
    }
    else{
        reject("Fsiled")
    }
})


//Handle promise
//.then() is used when promise is resolved / fulfilled
//.catch() is used when promise is rejected

p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
//Output- failed