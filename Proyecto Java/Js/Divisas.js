

const monedaOrigen = prompt("Ingrese la moneda de origen (ejemplo: ARG, USD):").toUpperCase();
const monedaDestino = prompt("Ingrese la moneda de destino (ejemplo: ARG, USD, EUR, JPY, GBP):").toUpperCase();
const cantidad = parseFloat(prompt("Ingrese la cantidad a convertir:"));


const monedasAdmitidas = ["ARG", "USD", "EUR", "JPY", "GBP"];


const tasasDeCambio = {
  ARG: 1.0,
  USD: 0.0029,
  EUR: 0.0027,
  JPY: 0.042,
  GBP: 0.0023,
};


function convertirDivisas(monedaOrigen, monedaDestino, cantidad) {
  if (monedasAdmitidas.includes(monedaOrigen) && monedasAdmitidas.includes(monedaDestino)) {
    const tasaOrigen = tasasDeCambio[monedaOrigen];
    const tasaDestino = tasasDeCambio[monedaDestino];
    
    const resultado = cantidad * (tasaDestino / tasaOrigen);
    return resultado.toFixed(2);
  } else {
    return "Moneda no admitida.";
  }
}

const resultado = convertirDivisas(monedaOrigen, monedaDestino, cantidad);

if (resultado === "Moneda no admitida.") {
  alert(resultado);
} else {
  alert(`${cantidad} ${monedaOrigen} equivale a ${resultado} ${monedaDestino}`);
}