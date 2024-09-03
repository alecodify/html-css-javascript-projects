const input = document.getElementById("input");
const error = document.getElementById("error");
const result = document.getElementById("result");

function updateResults() {
    const value = parseFloat(input.value);

    if (isNaN(value) || value <= 0) {
        showError("Please enter a valid number!");
        clearTimeout(result.timeoutId);
    } else {
        showResult((value / 2.2).toFixed(2));
        clearTimeout(error.timeoutId);
    }
}

function showError(message) {
    error.innerText = message;
    setTimeout(() => {
        error.innerText = "";
        input.value = "";
    }, 2000);
}

function showResult(res) {
    result.innerText = res;
    result.timeoutId = setTimeout(() => {
        result.innerText = "";
        input.value = "";
    }, 5000);
}

input.addEventListener("input", updateResults);