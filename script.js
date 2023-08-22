let displayValue = '0';

let firstNum = null;
let secondNum = null;
let operator = null;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y == 0) {
        return 'no';
    } else {
        return x / y;
    }
}

function updateMainDisplay(value) {
    const mainDisplay = document.querySelector('#display-main');
    
    if (displayValue.length >= 8) {

    }
    else if (displayValue == '0' && value != 'decimal') {
        mainDisplay.textContent = value;
    } else {
        mainDisplay.textContent = displayValue + value;
    }
    displayValue = mainDisplay.textContent;
}

function updateSecondaryDisplay() {

}

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case 'add': {
            console.log(add(firstNum, secondNum));
            break;
        }

        case 'subtract': {
            subtract(firstNum, secondNum);
            break;
        }

        case 'multiply': {
            multiply(firstNum, secondNum);
            break;
        }

        case 'divide': {
            divide(firstNum, secondNum);
            break;
        }
    }
}

const buttons = document.querySelectorAll('.number-button');
buttons.forEach(function(currentBtn) {
    currentBtn.addEventListener('click', (e) => updateMainDisplay(e.target.value));
});