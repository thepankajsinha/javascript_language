//select elements
const fact = document.querySelector("h3")
const btn = document.querySelector("button")

function getData() {
    fetch('https://cat-fact.herokuapp.com/facts') //fetch API
        .then(res => res.json()) //convert response data into json
        .then(data => fact.innerText = data[3].text) //select data which has to print
        .catch(error => console.log(error)); //print error 
}

btn.addEventListener("click", getData) //call getData on button click