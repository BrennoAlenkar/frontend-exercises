// Variáveis
const resposta = document.querySelector(".res");
const celsius = 30;
const fahrenheit = 86;

// Função que insere a mensagem no HTML
function mostraMensagem(mensagem) {
  resposta.innerHTML += mensagem;
}

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

console.log({
  resCelsius,
  resFahrenheit
});

// 
mostraMensagem(`${celsius} graus Celsius equivalem a ${resCelsius} graus Fahrenheit <br>`);
mostraMensagem(`${fahrenheit} graus Fahrenheit equivalem a ${resFahrenheit} graus Celsius`);