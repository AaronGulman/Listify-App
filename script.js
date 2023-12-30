let addBtn = document.querySelector('#addBtn');
let userInput = document.querySelector('#userInput')

addBtn.addEventListener('click', newItem)

function newItem(){
	console.log(userInput.value)
}