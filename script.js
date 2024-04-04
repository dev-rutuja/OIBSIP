function convert(fromUnit, toUnit) {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    let result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (inputTemp * 9 / 5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (inputTemp - 32) * 5 / 9;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = inputTemp + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = inputTemp - 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (inputTemp + 459.67) * 5 / 9;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (inputTemp * 9 / 5) - 459.67;
    } else {
        result = inputTemp; // If same units selected
    }

    document.getElementById('result').innerText = result.toFixed(2);
}
