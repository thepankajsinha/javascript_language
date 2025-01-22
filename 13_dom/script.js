//DOM Manipulation
//select element
//create element
//insert element
//remove element
//modify element text and style

//Select elements
let friendStatus = document.querySelector("h5")
let addBtn = document.querySelector("#add")
let btnContainer = document.querySelector("#btn-container")


//create element
let removeBtn = document.createElement("button")
//add style for new element
removeBtn.innerText = "Remove"
removeBtn.style.backgroundColor = "#DBDBDB"
removeBtn.style.padding = "12px 20px"
removeBtn.style.fontWeight = "700"
removeBtn.style.borderRadius = "5px"
removeBtn.style.border = "none"
removeBtn.style.cursor = "pointer"


//Handel addBtn events
addBtn.addEventListener("click", () =>{
    friendStatus.innerText = "Friend"   //modify text
    friendStatus.style.color = "green"  //modify style
    btnContainer.appendChild(removeBtn) //add element
    addBtn.remove()  //remove element
})

//handle removeBtn event
removeBtn.addEventListener("click", () =>{
    friendStatus.innerText = "Stranger" //modify text
    friendStatus.style.color = "red"  //modify style
    btnContainer.appendChild(addBtn)  //add element
    removeBtn.remove()  //remove element
})