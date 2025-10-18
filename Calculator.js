function addition() {
    let a = Number(document.getElementById("input").value);
    let b = Number(document.getElementById("input2").value);

    let result = a + b;
    document.getElementById("result").innerHTML = result;
    document.getElementById("input").value = result;
    document.getElementById("input2").value = "";
}

function subtract() {
    let a = Number(document.getElementById("input").value);
    let b = Number(document.getElementById("input2").value);

    let result = a - b;
    document.getElementById("result").innerHTML = result;
    document.getElementById("input").value = result;
    document.getElementById("input2").value = "";
}

function multiply() {
    let a = Number(document.getElementById("input").value);
    let b = Number(document.getElementById("input2").value);

    let result = a * b;
    document.getElementById("result").innerHTML = result;
    document.getElementById("input").value = result;
    document.getElementById("input2").value = "";
}

function divide() {
    let a = Number(document.getElementById("input").value);
    let b = Number(document.getElementById("input2").value);

    let result = a / b;
    document.getElementById("result").innerHTML = result;
    document.getElementById("input").value = result;
    document.getElementById("input2").value = "";
}

function addNumber(n) {
    document.activeElement.value += String(n);
    document.activeElement.setCustomValidity("")
}

