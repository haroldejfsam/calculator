
// const power = function(a,b) {
//   return Math.pow(a, b)
	
// };

// const factorial = function(a) {
// 	let result = 1;
  
  
//   if (a===0) {
//     return result;
//   } else {
//     for (let i = a;i>=1;i--) {
//       result = result*i;
//     }; 
  
//   return result;  

//   };
  
// };

// const sum = function(array) {
// 	return array.reduce((acc, item) => acc += item,0)
// };

// const multiply = function(array) {
//   return array.reduce((acc, item)=> acc *= item,1)

// };

const numberKeys = Array.from(document.querySelectorAll('.numbers'));
const clearButton = document.querySelector('#butClear');
const backButton = document.querySelector('#butBack');
const decButton = document.querySelector('#butDot');
let displayValue = document.querySelector('#display');
let workingArray = [];


numberKeys.forEach((item) => {
	item.addEventListener('click', (e)=> {
		if(displayValue.innerText.length < 11) {
		displayValue.innerText += e.target.innerText;
		};
	})
})

clearButton.addEventListener('click', ()=> {
	displayValue.innerText = '';
})

backButton.addEventListener('click', ()=>{
	displayValue.innerText = displayValue.innerText.slice(0, -1);
})

decButton.addEventListener('click', (e)=> {
	if(displayValue.innerText.length < 11 && !displayValue.innerText.includes('.')) {
	displayValue.innerText += e.target.innerText;
	};
})


// calculation functions
const modulo = function(a, b) {
	return a % b
};

const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b 
};

const multiply = function (a, b) {
    return a * b
};

const  divide = function(a, b) {
	return a / b
};

