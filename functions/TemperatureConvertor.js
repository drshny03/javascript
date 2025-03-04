//function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(degC)
 {
    if (degC < 0 || degC > 100) {
        console.log("Celsius temperature must be between 0C and 100C");
        return;
    }
    let degF = (degC * 9 / 5) + 32;
    console.log(`${degC}C is equal to ${degF.toFixed(2)}F`);
}
//function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(degF)
 {
    if (degF < 32 || degF > 212) {
        console.log("Fahrenheit temperature must be between 32F and 212F");
        return;
    }
    let degC = (degF - 32) * 5 / 9;
    console.log(`${degF}F is equal to ${degC.toFixed(2)}C`);
}

let choice = Number(process.argv[2]);
let temperature = Number(process.argv[3]); 

switch (choice)
 {
    case 1:
        celsiusToFahrenheit(temperature);
        break;
    case 2:
        fahrenheitToCelsius(temperature);
        break;
    default:
        console.log("Invalid choice");
}