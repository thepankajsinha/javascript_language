const button = document.querySelector("#search-button")
const userInput = document.querySelector("#username-input")
const userName = document.querySelector("#username")

button.addEventListener("click", () => {
    const value = userInput.value; //get user input value
    localStorage.setItem("name", value) // store value in local storage
    location.reload();  //reload browser
})


window.addEventListener("load", ()=> {
    const value = localStorage.getItem("name"); //get data from local storage
    userName.innerText = value; //insert local storage data in html
})