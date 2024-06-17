function convert() {
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let temperatureInput = document.getElementById('temperature').value;
    let temperature = parseFloat(temperatureInput);

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature value.");
        return;
    }

    let convertedValue;

    // Perform conversion logic
    if (fromUnit === 'C') {
        if (toUnit === 'F') {
            convertedValue = (temperature * 9 / 5) + 32;
        } else if (toUnit === 'K') {
            convertedValue = temperature + 273.15;
        } else {
            convertedValue = temperature;
        }
    } else if (fromUnit === 'F') {
        if (toUnit === 'C') {
            convertedValue = (temperature - 32) * 5 / 9;
        } else if (toUnit === 'K') {
            convertedValue = (temperature - 32) * 5 / 9 + 273.15;
        } else {
            convertedValue = temperature;
        }
    } else if (fromUnit === 'K') {
        if (toUnit === 'C') {
            convertedValue = temperature - 273.15;
        } else if (toUnit === 'F') {
            convertedValue = (temperature - 273.15) * 9 / 5 + 32;
        } else {
            convertedValue = temperature;
        }
    }

    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + toUnit;
}
