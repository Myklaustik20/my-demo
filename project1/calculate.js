let firstNum = document.getElementById("num1-el")
let secondNum = document.getElementById("num2-el")
let answer = document.getElementById("sum-el")

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2






function add() {
 let correctAnswer = num1 + num2
 answer.textContent = "Equal: " + correctAnswer

}

function subtract() {
 let correctAnswer = num1 - num2
    answer.textContent = "Equal: " + correctAnswer
   
}

function divide() {
 let correctAnswer = num1 / num2
    answer.textContent = "Equal: " + correctAnswer
   
}

function multiply() {
 let correctAnswer = num1 * num2
    answer.textContent = "Equal: " + correctAnswer
   
}