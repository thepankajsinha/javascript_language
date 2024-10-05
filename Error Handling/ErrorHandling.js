//Before error handling
console.log(x)
// ReferenceError: x is not defined
//     at Object.<anonymous> (d:\Pankaj\JavaScript\Error Handling\tempCodeRunnerFile.js:1:13)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49


//Try block->the code which can generate error are put inside try block
//Catch block-> If try block throw error then catch block catch the error.Catch block run only when error found

//Finally block-> It Always run whether error found or not.


//After error handling
try {
    console.log(x)  
}
catch (err) {
    console.log("I am catch block") 
}
finally {
    console.log("I am finally block")
}

// I am catch block
// I am finally block