const btn = document.getElementById('btn');
const result = document.getElementById('result');
const condition = document.getElementById('condition')

function calculateBMI() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;

    const bmi = weight / (height * height);

    result.value = bmi;

    if (bmi < 18.5) {
        condition.innerText = "Under weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        condition.innerText = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        condition.innerText = "Over weight";
    } else if (bmi >= 30) {
        condition.innerText = "obesity";
    }   
}

btn.addEventListener('click', calculateBMI);