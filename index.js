const prompt = require('prompt-sync')();

function ordenarNumeros() {
  let n1, n2, n3;

  while (true) {
    n1 = parseFloat(prompt("Ingrese el primer número: "));
    n2 = parseFloat(prompt("Ingrese el segundo número: "));
    n3 = parseFloat(prompt("Ingrese el tercer número: "));

    if (n1 !== n2 && n1 !== n3 && n2 !== n3) {
      break;
    } else {
      console.log("Por favor, ingrese números diferentes.");
    }
  }

  let mayor, centro, menor;

  if (n1 >= n2 && n1 >= n3) {
    mayor = n1;
    if (n2 >= n3) {
      centro = n2;
      menor = n3;
    } else {
      centro = n3;
      menor = n2;
    }
  } else if (n2 >= n1 && n2 >= n3) {
    mayor = n2;
    if (n1 >= n3) {
      centro = n1;
      menor = n3;
    } else {
      centro = n3;
      menor = n1;
    }
  } else {
    mayor = n3;
    if (n1 >= n2) {
      centro = n1;
      menor = n2;
    } else {
      centro = n2;
      menor = n1;
    }
  }

  console.log("El mayor es: " + mayor);
  console.log("El del medio es: " + centro);
  console.log("El menor es: " + menor);
// No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}
module.exports = ordenarNumeros;
ordenarNumeros();
