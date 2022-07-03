const reverseString = function(string) {
    const stringArray = Array.from(string);
    let reversedString = [];
    const length = stringArray.length;
    
    for (let i = 0; i < length; i++) {
        reversedString.push(stringArray.pop());
    }
    return reversedString.join('');


};

// Do not edit below this line
module.exports = reverseString;
