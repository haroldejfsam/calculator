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

// Listens for numberkey clicks and populates display, limits to 11 characters
numberKeys.forEach((item) => {
	item.addEventListener('click', (e)=> {
		if(displayValue.innerText.length < 11) {
		displayValue.innerText += e.target.innerText;
		};
	})
})


// Listens for clear button click and clears display and values stored
clearButton.addEventListener('click', () => {
	displayValue.innerText = '';
	firstNum = '';
	secondNum = '';
	operator = '';
	result = '';
})

// Listen for backbutton click and removes last character in display
backButton.addEventListener('click', () =>{
	displayValue.innerText = displayValue.innerText.slice(0, -1);
})


// Listens for decimal button click and adds decimal character to display only if display length is less than 11 characters and decimal character is not already present
decButton.addEventListener('click', (e) => {
	if(displayValue.innerText.length < 11 && !displayValue.innerText.includes('.')) {
	displayValue.innerText += e.target.innerText;
	};
})


// Listens for equals button click and executes operate function
eqButton.addEventListener('click',() =>{
	operate();
	displayValue.innerText = result;
})


//Operator click events

// Listens for add button click
addButton.addEventListener('click', ()=> {
	if (firstNum == '') {
	firstNum = displayValue.innerText;
	operator = '+';
	displayValue.innerText = '';
	} else {
		
		operate();
		operator = '+';
		displayValue.innerText = '';
	}; 
});


// Listens for modulo button click
modButton.addEventListener('click', ()=> {
	if (firstNum == '') {
	firstNum = displayValue.innerText;
	operator = '%';
	displayValue.innerText = '';
	} else {
		
		operate();
		operator = '%';
		displayValue.innerText = '';
	}; 
});


// Listens for subtract button click
subButton.addEventListener('click', ()=> {
	if (firstNum == '') {
	firstNum = displayValue.innerText;
	operator = '-';
	displayValue.innerText = '';
	} else {
		
		operate();
		operator = '-';
		displayValue.innerText = '';
	}; 
});


// Listens for multiply button click
mulButton.addEventListener('click', ()=> {
	if (firstNum == '') {
	firstNum = displayValue.innerText;
	operator = 'x';
	displayValue.innerText = '';
	} else {
		
		operate();
		operator = 'x';
		displayValue.innerText = '';
	}; 
});


// Listens for divide button click
divButton.addEventListener('click', ()=> {
	if (firstNum == '') {
	firstNum = displayValue.innerText;
	operator = '/';
	displayValue.innerText = '';
	} else {
		
		operate();
		operator = '/';
		displayValue.innerText = '';
	}; 
});





// calculation functions
const operate = () =>{
	switch (operator){
		case '+':
			
			secondNum = displayValue.innerText;
			displayValue.innerText = '';
			result = add(firstNum, secondNum);
			displayValue.innerText = '';
			firstNum = result;
			secondNum = '';
			operator = '';
			break;
		
		case '%':
			
			secondNum = displayValue.innerText;
			displayValue.innerText = '';
			result = modulo(firstNum, secondNum);
			displayValue.innerText = '';
			firstNum = result;
			secondNum = '';
			operator = '';
			break;

		case '-':
			
			secondNum = displayValue.innerText;
			displayValue.innerText = '';
			result = subtract(firstNum, secondNum);
			displayValue.innerText = '';
			firstNum = result;
			secondNum = '';
			operator = '';
			break;

		case 'x':
			
			secondNum = displayValue.innerText;
			displayValue.innerText = '';
			result = multiply(firstNum, secondNum);
			displayValue.innerText = '';
			firstNum = result;
			secondNum = '';
			operator = '';
			break;

		case '/':
			
			secondNum = displayValue.innerText;
			displayValue.innerText = '';
			result = secondNum == '0' ? `STAY IN SCHOOL` : divide(firstNum, secondNum);
			displayValue.innerText = '';
			firstNum = result;
			secondNum = '';
			operator = '';
			break;

		default:
			console.log('eqButton default case');


	}
}


const add = function(a, b) {
	return Number(a) + Number(b)
};

const modulo = function(a, b) {
	return Number(a) % Number(b)
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


