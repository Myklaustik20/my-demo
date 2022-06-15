let myExtensions = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const unorderedList = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myExtensions.push(inputEl.value)// this save our input text to "myExtensions array"
    inputEl.value = ""// clears the inputbox after the input is saved
    renderMyExtensions()
})

//this is used to list out the lists of things we put in the input box
function renderMyExtensions() {
    let listItems = " "
for (let i = 0; i < myExtensions.length; i++) {
    listItems += `
    <li>
         <a target = '_blank' href='${myExtensions[i]}'>
         ${myExtensions[i]}
         </a>
    </li>`
    // const li = document.createElement("li")
    // li.textContent = myExtensions[i] 
    // unorderedList.append(li)
}
unorderedList.innerHTML = listItems
}


// let boxExample = document.getElementById("box")
// boxExample.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })

