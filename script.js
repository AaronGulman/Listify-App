import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
	databaseURL: "https://listify-e794f-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, 'items')


let addBtn = document.querySelector('#addBtn');
let userInput = document.querySelector('#userInput');

addBtn.addEventListener('click', newItem);

function newItem(){
	let inputValue = userInput.value;
	push(itemsInDB,inputValue);
	console.log(`${inputValue},added to database`);
}