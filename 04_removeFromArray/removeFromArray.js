

const removeFromArray = function(array, ...args) {
    function filterArray(item) {
        for (let i = 0; i < args.length; i++) {
            if (item === args[i]) {
                return false;
            } else if (i === (args.length - 1)) {
                return true;
            }
        }
    }
    let result = array.filter(item => filterArray(item));
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
