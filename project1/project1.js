 // document.getElementById("count-el").innerText = 5 

 // this is used to get the element that has the initial count number(0)
 let saveEl = document.getElementById("save-el")
 let peopleCount = document.getElementById("count-el") 
 console.log(peopleCount) // this tells the computer what variables to log to the console
 console.log(saveEl)

let count = 0

 function increment() {
    count += 1 
    /*this sets the innerText(0) of the element with the id = "count-el"
     to the funtion "increment()" */
      peopleCount.textContent = count
  }

 function save() {
     let saveCount = count + " - "
     saveEl.textContent += saveCount
    //this reset the inner text content back to "0" when we save
     peopleCount.textContent = 0
     count = 0

     //this is used to save the count when clicked
     console.log(count)
 }
// let myName = "Michael"
// let greetings = "Hi, my name is"

// let myGreeting = greetings + " " + myName + " !"

// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")



