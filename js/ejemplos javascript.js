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

/*
  Convertir minutos en segundos
*/

function minutos_a_segudos(minutos) {
  return minutos * 60
}

salida(300, minutos_a_segundos(5))
salida(180, minutos_a_segundos(3))
salida(120, minutos_a_segundos(2))
