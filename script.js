// Scientific Calculator functions
function appendToDisplay(value) {
    document.getElementById('scientific-display').value += value;
}

function clearDisplay() {
    document.getElementById('scientific-display').value = '';
}

function calculateScientific() {
    let displayValue = document.getElementById('scientific-display').value;
    try {
        const result = eval(displayValue);
        document.getElementById('scientific-display').value = result;
    } catch (error) {
        document.getElementById('scientific-display').value = 'Error';
    }
}

// Square Meter Calculator
function calculateSquareMeters() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    if (!isNaN(length) && !isNaN(width)) {
        document.getElementById('square-meter-result').innerText = `Area: ${length * width} m²`;
    } else {
        document.getElementById('square-meter-result').innerText = 'Invalid input';
    }
}

// Radical Number Calculator
function calculateRadical() {
    const number = parseFloat(document.getElementById('radical-number').value);
    document.getElementById('radical-result').innerText = isNaN(number) ? 'Invalid input' : `√${number} = ${Math.sqrt(number)}`;
}

// Factorial Calculator
function calculateFactorial() {
    const number = parseInt(document.getElementById('factorial-number').value);
    if (number >= 0 && Number.isInteger(number)) {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        document.getElementById('factorial-result').innerText = `${number}! = ${factorial}`;
    } else {
        document.getElementById('factorial-result').innerText = 'Invalid input';
    }
}

// Volume Calculator (Cube)
function calculateVolume() {
    const sideLength = parseFloat(document.getElementById('side-length').value);
    document.getElementById('volume-result').innerText = isNaN(sideLength) ? 'Invalid input' : `Volume: ${Math.pow(sideLength, 3)} m³`;
}

// Permutation Calculator
function calculatePermutation() {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);
    function factorial(num) {
        return num <= 1 ? 1 : num * factorial(num - 1);
    }
    if (n >= r && r >= 0) {
        const result = factorial(n) / factorial(n - r);
        document.getElementById('permutation-result').innerText = `P(${n}, ${r}) = ${result}`;
    } else {
        document.getElementById('permutation-result').innerText = 'Invalid input';
    }
}

// Inch/Cm Converter
function convertToCm() {
    const value = parseFloat(document.getElementById('value-inch-cm').value);
    document.getElementById('conversion-result').innerText = isNaN(value) ? 'Invalid input' : `${value} inches = ${(value * 2.54).toFixed(2)} cm`;
}

function convertToInch() {
    const value = parseFloat(document.getElementById('value-inch-cm').value);
    document.getElementById('conversion-result').innerText = isNaN(value) ? 'Invalid input' : `${value} cm = ${(value / 2.54).toFixed(2)} inches`;
}

// Combination Calculator
function calculateCombination() {
    const n = parseInt(document.getElementById('comb-n').value);
    const r = parseInt(document.getElementById('comb-r').value);
    function factorial(num) {
        return num <= 1 ? 1 : num * factorial(num - 1);
    }
    if (n >= r && r >= 0) {
        const result = factorial(n) / (factorial(r) * factorial(n - r));
        document.getElementById('combination-result').innerText = `C(${n}, ${r}) = ${result}`;
    } else {
        document.getElementById('combination-result').innerText = 'Invalid input';
    }
}