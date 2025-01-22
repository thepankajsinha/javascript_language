//Function inside another function is called closure
//A closure gives a function access to its outer scope variables.


function makeCounter(){
    let count = 1;
    //here increment function does not have count variable but it is inside the makeCounter(), hence it has access to count variable
    function increment(){
        console.log(count++);
    }

    return increment;
}

const counter = makeCounter();

counter(); //1
counter(); //2
counter(); //3
counter(); //4
counter(); //5