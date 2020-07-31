/*
  La función auxiliar salida muestra el valor esperado y valor real de retorno de la función
*/

function salida(fn, valor_esperado, valor_devuelto) {
  console.log(String(fn))
  console.log(`valor esperado: ${valor_esperado}`)
  console.log(`valor devuelto: ${valor_devuelto}`)
  console.log("\n" + "-".repeat(80) + "\n")
}

/*
  Suma de dos números
*/

function suma(a, b) {
  return a + b
}

salida(suma, 5, suma(2, 3))
salida(suma, -1, suma(2, -3))

/*
  Convertir minutos en segundos
*/

function minutos_a_segundos(minutos) {
  return minutos * 60
}

salida(minutos_a_segundos, 300, minutos_a_segundos(5))
salida(minutos_a_segundos, 180, minutos_a_segundos(3))
salida(minutos_a_segundos, 120, minutos_a_segundos(2))

/*
  Devolver el siguiente entero
*/

function siguiente_entero(n) {
  return n > 0 ? ++n : --n
}

salida(siguiente_entero, 1, siguiente_entero(0))
salida(siguiente_entero, 10, siguiente_entero(9))
salida(siguiente_entero, -3, siguiente_entero(-2))

/*
  Devolver el area de un triángulo a partir de su base y altura
*/

function area_triangulo(base, altura) {
  return (base * altura) / 2
}

salida(area_triangulo, 3, area_triangulo(3, 2))
salida(area_triangulo, 14, area_triangulo(7, 4))
salida(area_triangulo, 50, area_triangulo(10, 10))

/*
  Devolver el resto de una división
*/

function resto(a, b) {
  return a % b
}

salida(resto, 1, resto(1, 3))
salida(resto, 3, resto(3, 4))
salida(resto, -9, resto(-9, 45))
salida(resto, 0, resto(5, 5))

/*
  Devolver true si la suma de dos números dados es menor que 100, si no devolver false
*/

function suma_menos_que_cien(a, b) {
  return a + b < 100
}

salida(suma_menos_que_cien, true, suma_menos_que_cien(22, 15))
salida(suma_menos_que_cien, false, suma_menos_que_cien(83, 34))
/*
  Devolver true si num1 es igual a num2, si no devolver false
*/

function iguales(num1, num2) {
  return num1 === num2
}

salida(iguales, false, iguales(4, 8))
salida(iguales, true, iguales(5, 5))
salida(iguales, false, iguales(5, "5"))

/*
  Devolver true si num1 es menor o igual a cero, si no devolver false
*/

function menor_o_igual_a_cero(num1) {
  return num1 <= 0
}

salida(menor_o_igual_a_cero, true, menor_o_igual_a_cero(0))
salida(menor_o_igual_a_cero, false, menor_o_igual_a_cero(5))
salida(menor_o_igual_a_cero, true, menor_o_igual_a_cero(-2))

/*
  Convertir una cadena a número si es posible, si no devolver "no se puede convertir"
*/

function cadena_a_numero(cad) {
  return Number(cad) || "no se puede convertir"
}

salida(cadena_a_numero, 25, cadena_a_numero("25"))
salida(cadena_a_numero, "no se puede convertir", cadena_a_numero("#@!~$"))
salida(cadena_a_numero, -18, cadena_a_numero("-18"))

/*
  Repetir la letra "r" al final de la cadena "A" tantas veces como indique el argumento.
  Si el argumento es menor o igual a cero, devolver "Shhh"
*/

function pirata_gritando(n) {
  return n > 0 ? "A" + "r".repeat(n) : "Shhh"
}

salida(pirata_gritando, "Arrr", pirata_gritando(3))
salida(pirata_gritando, "Shhh", pirata_gritando(0))
salida(pirata_gritando, "Arrrrrrr", pirata_gritando(7))
salida(pirata_gritando, "Shhh", pirata_gritando(-3))

/*
  Crear una funcion que calcule el cuadrado de un número pasado como argumento
  y otra que calcule su y raíz cuadrada.
*/

function cuadrado_de(num) {
  return num ** 2
}

function raiz_cuadrada_de(num) {
  return num ** 0.5
}

salida(cuadrado_de, 4, cuadrado_de(2))
salida(raiz_cuadrada_de, 5, raiz_cuadrada_de(25))
salida(cuadrado_de, 9, cuadrado_de(3))
salida(raiz_cuadrada_de, 7, raiz_cuadrada_de(49))