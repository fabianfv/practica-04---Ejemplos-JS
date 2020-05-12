/*
  La función auxiliar salida muestra el valor esperado y valor real de retorno de la función
*/

function salida(valor_esperado, valor_devuelto) {
  console.log(`valor esperado: ${valor_esperado}\nvalor devuelto: ${valor_devuelto}`)
}

/*
  Suma de dos números
*/

function suma(a, b) {
  return a + b
}

salida(5, suma(2, 3))
salida(-1, suma(2, -3))
