const FONT_SIZE = 64;
const output = document.getElementById('output');

let ans = '0';
let currentOperation = (null);
let current = '';

const operate = (ans, operation, current) => {
    if (operation === null) {
        return current || ans;
    }
    return operation(+ans, +current);
}

const updateOutput = (n) => {
    const digitCount = Math.floor(output.clientWidth / FONT_SIZE * 2);

    let sign = n < 0? '-' : '';
    n = Math.abs(n);
    output.textContent = (sign + n).slice(0, digitCount);
}

const actions = {
    'C': () => {
        ans = '0';
        currentOperation = null;
        current = '';
        updateOutput(0);
    },
    '^': () => {currentOperation = (n, exp) => n ** exp},
    '%': () => {
        actions['='];
        ans /= 100;
        updateOutput(ans);
    },
    '+/-': () => {
        actions['='];
        ans *= -1;
        updateOutput(ans);
    },
    '/': () => {currentOperation = (a, b) => a / b},
    'x': () => {currentOperation = (a, b) => a * b},
    '-': () => {currentOperation = (a, b) => a - b},
    '+': () => {currentOperation = (a, b) => a + b},
    '=': () => {
        if (current === '') return;
        ans = operate(ans, currentOperation, current);
        currentOperation = null;
        current = '';
        updateOutput(ans);
    }
};

const buttons = [...document.querySelectorAll('#calculator button')];
buttons.forEach((button) => {
    const text = button.textContent;
    if (Number.isInteger(+text) || text === '.') {
        button.onclick = () => {
            current += text;
            updateOutput(current);
        }
    } else {
        button.onclick = () => {
            actions['=']();
            actions[text]();
        }
    }
});