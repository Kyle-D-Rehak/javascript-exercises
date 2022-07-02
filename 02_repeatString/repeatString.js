const repeatString = function(string, num = Math.floor(Math.random * 999 + 1)) {
    const stringArray = [];
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        stringArray.push(string);
    }
    return stringArray.join('');
};

// Do not edit below this line
module.exports = repeatString;
