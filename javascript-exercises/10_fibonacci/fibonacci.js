const fibonacci = function(n) {
    n = +n
    if(!Number.isInteger(n) || n < 0) return 'OOPS';

    let lastTwo = [0, 1];
    for (let i = 0; i < n; i++) {
        lastTwo[i % 2] = lastTwo[0] + lastTwo[1];
    }
    return lastTwo[n % 2];
};

// Do not edit below this line
module.exports = fibonacci;
