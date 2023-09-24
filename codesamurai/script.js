let currentInput = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        document.getElementById('display').value = '';
        resultDisplayed = false;
    }
    currentInput += value;
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    currentInput = '';
}

function calculate() {
    try {
        const sanitizedInput = currentInput.replace(/[^-()\d/*+.]/g, ''); // Sanitize input to prevent security issues
        const result = eval(sanitizedInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    
    
}

