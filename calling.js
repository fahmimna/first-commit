// calling.js

// Importing functions from original.js
const { copyArrayAndManipulate, multiplyBy2 } = require('./original');

// Calling the functions
const inputArray = [1, 2, 3];
const result = copyArrayAndManipulate(inputArray, multiplyBy2);

// Logging the result
console.log(result);
