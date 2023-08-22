let displayValue = '0';

let firstNum = null;
let secondNum = null;
let operator = null;

const mainDisplay = document.querySelector('#display-main');
const secondaryDisplay = document.querySelector('#display-secondary');

function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return Number(x) - Number(y);
}

function multiply(x, y) {
    return Number(x) * Number(y);
}

function divide(x, y) {
    if (Number(y) == 0) {
        return 'no';
    } else {
        return Number(x) / Number(y);
    }
}

function canAddOperator(operatorName, operatorValue) { 
    if (displayValue != '0' && operator == null) {
        firstNum = displayValue;
        operator = operatorValue;
        clearMainDisplay();
        secondaryDisplay.textContent = firstNum + ' ' + operatorName;
    }
}

function canCalculate() {
    if (firstNum != null && operator != null) {
        secondNum = displayValue;
        secondaryDisplay.textContent += ' ' + secondNum + ' =';
        operate(operator, firstNum, secondNum);
    }
}

function alreadyDecimal() {
    if (displayValue.includes('.')) {

    } else {
        updateMainDisplay('.');
    }
}

function clearMainDisplay() {
    displayValue = '0';
    mainDisplay.textContent = displayValue;
}

function updateMainDisplay(value) {    
    if (displayValue.length >= 8) {

    } else if (value == '.' && displayValue == '0') {
        mainDisplay.textContent = '0.';
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
            mainDisplay.textContent = add(firstNum, secondNum);
            break;
        }

        case 'subtract': {
            mainDisplay.textContent = subtract(firstNum, secondNum);
            break;
        }

        case 'multiply': {
            mainDisplay.textContent = multiply(firstNum, secondNum);
            break;
        }

        case 'divide': {
            mainDisplay.textContent = divide(firstNum, secondNum);
            break;
        }
    }
}

const numButtons = document.querySelectorAll('.number-button');
numButtons.forEach(function(currentBtn) {
    currentBtn.addEventListener('click', (e) => updateMainDisplay(e.target.value));
});

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', (e) => alreadyDecimal());

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(function(currentBtn) {
    currentBtn.addEventListener('click', (e) => canAddOperator(e.target.textContent, e.target.value));
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', (e) => canCalculate());