const fibonacci = function(number) {
    if (+number < 0) return 'OOPS';
    if (+number < 3) return 1;
    let array = [];
    array[0] = 1;
    array[1] = 1;

    for (let i = 2; i < +number; i++ ) {
        array[i] = (array[i - 1] + array[i - 2]);
    }
    return array[array.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
