let displayValue = '0';

let firstNum = null;
let secondNum = null;
let operator = null;

let isResult = false;

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
    if (operator == null || isResult == true) {
        if (isResult) {
            isResult = false;
            secondNum = null;
        }
        firstNum = displayValue;
        operator = operatorValue;
        clearMainDisplay();
        secondaryDisplay.textContent = firstNum + ' ' + operatorName;
    }
}

function canCalculate() {
    if (firstNum != null && operator != null && isResult == false) {
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

function changeAxis() {
    if (!isResult) {
        if (displayValue.toString().includes('-')) {
            displayValue = displayValue.toString().slice(1);
        } else if (displayValue == '0') {
            displayValue = '-';
        } else if (displayValue.toString().length <= 7) {
            displayValue = '-' + displayValue.toString();
        }
        mainDisplay.textContent = displayValue;
    }
}

function clearMainDisplay() {
    displayValue = '0';
    mainDisplay.textContent = displayValue;
}

function deleteLast() {
    if (isResult) {
        clearAll();
    } else if (displayValue == '0.' || displayValue == '-') {
        clearMainDisplay();
    } else if (displayValue != '0' && displayValue.toString().length > 1) {
        displayValue = displayValue.toString().slice(0, -1);
        mainDisplay.textContent = displayValue;
    } else if (displayValue.toString().length == 1) {
        displayValue = '0';
        mainDisplay.textContent = displayValue;
    }
}

function clearAll() {
    clearMainDisplay();
    firstNum = null;
    secondNum = null;
    operator = null;
    isResult = false;
    secondaryDisplay.textContent = "";
}

function showResult() {
    displayValue = displayValue.toString();

    if (displayValue.length > 8) {
        displayValue = displayValue.slice(0, 8);
        mainDisplay.textContent = displayValue  + "...";
    }

    mainDisplay.textContent = displayValue;
}

function updateMainDisplay(value) {    
    if (isResult) clearAll();
    
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

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case 'add': {
            displayValue = add(firstNum, secondNum);
            isResult = true;
            break;
        }

        case 'subtract': {
            displayValue = subtract(firstNum, secondNum);
            isResult = true;
            break;
        }

        case 'multiply': {
            displayValue = multiply(firstNum, secondNum);
            isResult = true;
            break;
        }

        case 'divide': {
            displayValue = divide(firstNum, secondNum);
            isResult = true;
            break;
        }
    }
    showResult();
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

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => clearAll());

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', (e) => deleteLast());

const changeAxisButton = document.querySelector('#change-axis');
changeAxisButton.addEventListener('click', (e) => changeAxis());