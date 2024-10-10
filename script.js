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
    const area = length * width;
    document.getElementById('area-result').innerText = `Area: ${area} m²`;
}

// Radical Number Calculator
function calculateRadical() {
    const number = parseFloat(document.getElementById('radical-number').value);
    const result = Math.sqrt(number);
    document.getElementById('radical-result').innerText = `√${number} = ${result}`;
}
