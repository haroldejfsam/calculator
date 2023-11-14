const numberKeys = Array.from(document.querySelectorAll('.numbers'));
const clearButton = document.querySelector('#butClear');
const backButton = document.querySelector('#butBack');
const decButton = document.querySelector('#butDot');
const modButton = document.querySelector('#butMod');
const mulButton = document.querySelector('#butMul');
const divButton = document.querySelector('#butDiv');
const subButton = document.querySelector('#butMin');
const addButton = document.querySelector('#butPlus');
const eqButton = document.querySelector('#butEq');
let displayValue = document.querySelector('#display');
let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';


numberKeys.forEach((item) => {
	item.addEventListener('click', (e)=> {
		if(displayValue.innerText.length < 11) {
		displayValue.innerText += e.target.innerText;
		};
	})
})

clearButton.addEventListener('click', () => {
	displayValue.innerText = '';
	firstNum = '';
	secondNum = '';
	operator = '';
	result = '';
})

backButton.addEventListener('click', () =>{
	displayValue.innerText = displayValue.innerText.slice(0, -1);
})

decButton.addEventListener('click', (e) => {
	if(displayValue.innerText.length < 11 && !displayValue.innerText.includes('.')) {
	displayValue.innerText += e.target.innerText;
	};
})

eqButton.addEventListener('click',() =>{
	operate();
})


addButton.addEventListener('click', ()=> {
	firstNum = displayValue.innerText;
	operator = '+';
	displayValue.innerText = '';
})


// calculation functions
const operate = () =>{
	switch (operator){
		case '+':
			secondNum = displayValue.innerText;
			result = add(firstNum, secondNum);
			displayValue.innerText = result;
			break;
		default:
			console.log('eqButton default case');


	}
}

const modulo = function(a, b) {
	return Number(a) % Number(b)
};

const add = function(a, b) {
	return Number(a) + Number(b)
};

const subtract = function(a, b) {
	return Number(a) - Number(b) 
};

const multiply = function (a, b) {
    return Number(a) * Number(b)
};

const  divide = function(a, b) {
	return Number(a) / Number(b)
};



