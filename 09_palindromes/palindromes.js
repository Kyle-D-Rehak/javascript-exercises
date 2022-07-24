const palindromes = function(string) {
let lowerCase = string.toLowerCase();
let charArray = lowerCase.split('');
let filteredArray = charArray.filter( item => /[a-z]/.test(item));
return filteredArray.every((item, index, array) => item === array[array.length - index - 1]);
};

// Do not edit below this line
module.exports = palindromes;