function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let display = document.getElementById("display").value;
    if (display) {
        try {
            document.getElementById("display").value = eval(display);
        } catch {
            document.getElementById("display").value = "Error";
        }
    }
}
