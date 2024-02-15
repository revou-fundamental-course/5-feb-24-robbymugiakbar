const form = document.getElementById('temperature-form');
const input = document.getElementById('temperature-input');
const scaleSelect = document.getElementById('temperature-scale');
const resultDiv = document.getElementById('conversion-result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const temperature = parseFloat(input.value);
    const scale = scaleSelect.value;

    let result;
    let explanation;

    if (scale === 'celsius') {
        result = convertCelsiusToFahrenheit(temperature);
        explanation = `${temperature}°C is equal to ${result.toFixed(2)}°F.`;
    } else if (scale === 'fahrenheit') {
        result = convertFahrenheitToCelsius(temperature);
        explanation = `${temperature}°F is equal to ${result.toFixed(2)}°C.`;
    } else {
        alert('Invalid scale selection!');
        return;
    }

    resultDiv.textContent = explanation;
});

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
