// Variáveis
const celsius = 30;
const fahrenheit = 86;

// Celsius -> Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Fahrenheit -> Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

const resCelsius = celsiusToFahrenheit(celsius);
const resFahrenheit = fahrenheitToCelsius(fahrenheit);

console.log(`${celsius} graus Celsius equivalem a ${resCelsius} graus Fahrenheit`);
console.log(`${fahrenheit} graus Fahrenheit equivalem a ${resFahrenheit} graus Celsius`);