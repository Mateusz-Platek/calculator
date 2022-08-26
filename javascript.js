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
    if(b == 0) {
        return "Don't divide by 0";
    }
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
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const del = document.querySelector('.delete');
const dot = document.querySelector('.dot');

let screenValue = null;
let choosenOperator = 'start';
let firstNumber = null;
let secondNumber = null;
let result = null;
let next = 'no';

digits.forEach(button => {
    button.addEventListener('click', () => {
        if(calcScreen.textContent == '0' || calcScreen.textContent == '+' || calcScreen.textContent == '-' || calcScreen.textContent == '*' || calcScreen.textContent == '/' || calcScreen.textContent == "Don't divide by 0" || next == 'yes') {
            calcScreen.textContent = button.textContent;
            screenValue = Number(calcScreen.textContent);
            next = 'no';
        } else {
            calcScreen.textContent = calcScreen.textContent + button.textContent;
            screenValue = Number(calcScreen.textContent);
        }
    })
});

dot.addEventListener('click', () => {
    let state = 'notpresent'
    let text = calcScreen.textContent;
    let arrText = text.split('');
    for(let i = 0; i < arrText.length; i++) {
        if(arrText[i] == '.') {
            state = 'present'
        }
    }
    if(state == 'notpresent') {
        calcScreen.textContent = calcScreen.textContent + dot.textContent;
    }
});

clear.addEventListener('click', () => {
    calcScreen.textContent = '0';
    choosenOperator = 'start';
    firstNumber = null;
    secondNumber = null;
    next = 'no';
});

del.addEventListener('click', () => {
    let text = calcScreen.textContent;
    let arrText = text.split('');
    if(arrText.length == 1) {
        calcScreen.textContent = '0';
    } else {
        arrText.pop();
        text = arrText.join('');
        calcScreen.textContent = text;
        screenValue = Number(calcScreen.textContent);
    }
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        if(choosenOperator != 'start') {
            next = 'yes';
            secondNumber = screenValue;
            result = operate(choosenOperator, firstNumber, secondNumber);
            screenValue = result;
            calcScreen.textContent = screenValue;
            firstNumber = screenValue;
            if(button.textContent == '+') {
                choosenOperator = '+';
            } else if(button.textContent == '-') {
                choosenOperator = '-';
            } else if(button.textContent == '*') {
                choosenOperator = '*';
            } else if(button.textContent == '/') {
                choosenOperator = '/';
            }
        } else {
            next = 'yes';
            firstNumber = screenValue;
            if(button.textContent == '+') {
                choosenOperator = '+';
            } else if(button.textContent == '-') {
                choosenOperator = '-';
            } else if(button.textContent == '*') {
                choosenOperator = '*';
            } else if(button.textContent == '/') {
                choosenOperator = '/';
            }
        }
        console.log(firstNumber, secondNumber);
    });
});

equals.addEventListener('click', () => {
    secondNumber = screenValue;
    result = operate(choosenOperator, firstNumber, secondNumber);
    screenValue = result;
    firstNumber = result;
    calcScreen.textContent = result;
});