import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

let addBtn = document.querySelector('#addBtn');
let userInput = document.querySelector('#userInput')

addBtn.addEventListener('click', newItem)

function newItem(){
	console.log(userInput.value)
}