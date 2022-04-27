const removeFromArray = function(array, ...args) {
    for(obj of args) {
        array = array.filter(a => a !== obj);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
