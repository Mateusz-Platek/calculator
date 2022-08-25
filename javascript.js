const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, a, b) {
    if(operator == '+') {
        return add(a, b);
    } else if(operator == '-') {
        return subtract(a, b);
    } else if(operator == '*') {
        return multiply(a, b);
    } else if(operator == '/') {
        return divide(a, b);
    }
}

const calcScreen = document.querySelector('.screen');
const digits = document.querySelectorAll('.digit');
const clear = document.querySelector('.clear');
let screenValue = 0;

digits.forEach(button => {
    button.addEventListener('click', () => {
        calcScreen.textContent = calcScreen.textContent + button.textContent;
        screenValue = Number(calcScreen.textContent);
    })
});

clear.addEventListener('click', () => {
    calcScreen.textContent = '';
    screenValue = 0;
});