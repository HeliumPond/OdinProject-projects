const output = document.getElementById('output');

let currentOperation = null;
let ans = '0';
let current = '';

const operate = function (a, operation, b) {
    return operation(Number(a), Number(b));
}

const actions = {
    '+': () => {currentOperation = (a, b) => a + b},
    '-': () => {currentOperation = (a, b) => a - b},
    '*': () => {currentOperation = (a, b) => a * b},
    '/': () => {currentOperation = (a, b) => a / b},
    '=': () => {
        if(current === '') return;
        ans = operate(ans, currentOperation, current);
        current = '';
        output.textContent = ans;
    }
};