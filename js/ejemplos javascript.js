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

/*
  Devolver el siguiente entero
*/

function siguiente_entero(n) {
  return n > 0 ? ++n : --n
}

salida(1, siguiente_entero(0))
salida(10, siguiente_entero(9))
salida(-3, siguiente_entero(-2))

/*
  Devolver el area de un triángulo a partir de su base y altura
*/

function area_triangulo(base, altura) {
  return (base * altura) / 2
}

salida(3, area_triangulo(3, 2))
salida(14, area_triangulo(7, 4))
salida(50, area_triangulo(10, 10))
