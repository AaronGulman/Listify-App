import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

const appSettings = {
	databaseURL: "https://listify-e794f-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)

let addBtn = document.querySelector('#addBtn');
let userInput = document.querySelector('#userInput')

addBtn.addEventListener('click', newItem)

function newItem(){
	console.log(userInput.value)
}