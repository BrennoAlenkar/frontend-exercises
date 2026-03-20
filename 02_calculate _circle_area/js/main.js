const raio = 3;

function calculaArea(r) {
  return Math.PI * (r ** 2);
}

const res = calculaArea(raio);

console.log(`Raio: ${raio} metros`);
console.log(`Área do círculo: ${res.toFixed(2)} metros²`);