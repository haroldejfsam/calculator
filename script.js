
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

const modulo = function(a, b) {
	return a % b
};

const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b 
};

const sum = function(array) {
	return array.reduce((acc, item) => acc += item,0)
};

const multiply = function(array) {
  return array.reduce((acc, item)=> acc *= item,1)

};
