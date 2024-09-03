const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function toCelsius(f, k) {
    return f ? (f - 32) / 1.8 : k - 273.15;
}

function toFahrenheit(c, k) {
    return c ? (c * 1.8 + 32) : (k - 273.15) * 1.8 + 32;
}

function toKelvin(c, f) {
    return c ? c + 273.15 : (f - 32) / 1.8 + 273.15;
}

function computeTemp(event) {
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            celsius.value = currentValue.toFixed(2);
            fahrenheit.value = toFahrenheit(currentValue, null).toFixed(2);
            kelvin.value = toKelvin(currentValue, null).toFixed(2);
            break;
        case "fahrenheit":
            celsius.value = toCelsius(currentValue, null).toFixed(2);
            kelvin.value = toKelvin(null, currentValue).toFixed(2);
            fahrenheit.value = currentValue.toFixed(2);
            break;
        case "kelvin":
            celsius.value = toCelsius(null, currentValue).toFixed(2);
            fahrenheit.value = toFahrenheit(null, currentValue).toFixed(2);
            kelvin.value = currentValue.toFixed(2);
            break;
    }
}
