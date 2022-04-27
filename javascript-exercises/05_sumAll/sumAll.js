const sumAll = function(n1, n2) {
    if(!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2 < 0) {
        return "ERROR";
    }

    if(n1 > n2) {
        [n1, n2] = [n2, n1];
    }
    sum = 0;
    for(let n = n1; n <= n2; n++) {
        sum += n;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
