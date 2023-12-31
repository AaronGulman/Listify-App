import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
	databaseURL: "https://listify-e794f-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, 'items')




let addBtn = document.querySelector('#addBtn');
let userInput = document.querySelector('#userInput');
let uList = document.getElementById('ulist')



addBtn.addEventListener('click', newItem);

function newItem(){
	let inputValue = userInput.value;
	push(itemsInDB,inputValue);
	clear();
	console.log(`${inputValue},added to database`);
}

onValue(itemsInDB, function(snapshot){
	let items = Object.values(snapshot.val());
	clearUl()
	for(let i = 0; i < items.length; i++){
		addList(items[i])
	}

})

function addList(inputValue){
	let list = document.createElement('li')
	uList.appendChild(list)
	list.textContent += inputValue;
}

function clear(){
	userInput.value = ''
}

function clearUl(){
	uList.innerHTML = ""
}