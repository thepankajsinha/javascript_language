//select all html elements
const button = document.querySelector("#search-button")
const input = document.querySelector("#city-input")
const cityName = document.querySelector("#city-name")
const countryName = document.querySelector("#country-name")
const temp = document.querySelector("#temprature")
const localtime = document.querySelector("#local-time")

//handle button click  event
button.addEventListener("click", async function () {
    const value = input.value;  //get user input
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5027345a0c6c4f5a9c7104051240210&q=${value}&aqi=yes`);  //get weater data using API
    const result =  await response.json(); //convert response data in json

    //insert all API data into  html element
    cityName.innerText = `City - ${result.location.name}`
    countryName.innerText = `Country - ${result.location.country}`
    temp.innerText = `Temp - ${result.current.temp_c} C`
    localtime.innerText = `LocalTime - ${result.location.localtime}`
})

