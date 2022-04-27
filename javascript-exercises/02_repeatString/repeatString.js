const repeatString = function(s, n) {
    if(n < 0 || !Number.isInteger(n)) return 'ERROR';

    result = '';

    while(n--) {
        result += s;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
