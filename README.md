# Ejemplos simples de Javascript

https://fabianfv.github.io/practica04---Ejemplos-JS/

Suma de dos números

```javascript
function suma(a, b) {
  return a + b
}
```

Convertir minutos en segundos

```javascript
function minutos_a_segudos(minutos) {
  return minutos * 60
}
```

Devolver el siguiente entero

```javascript
function siguiente_entero(n) {
  return n > 0 ? ++n : --n
}
```

Devolver el area de un triángulo a partir de su base y altura

```javascript
function area_triangulo(base, altura) {
  return (base * altura) / 2
}
```

Devolver el resto de una división

```javascript
function resto(a, b) {
  return a % b
}
```

Devolver true si la suma de dos números dados es menor que 100, si no devolver false

```javascript
function suma_menos_que_cien(a, b) {
  return a + b < 100
}
```

Devolver true si num1 es igual a num2, si no devolver false

```javascript
function iguales(num1, num2) {
  return num1 === num2
}
```

Devolver true si num1 es menor o igual a cero, si no devolver false

```javascript
function menor_o_igual_a_cero(num1) {
  return num1 <= 0
}
```

Convertir una cadena a número si es posible, si no devolver "no se puede convertir"

```javascript
function cadena_a_numero(cad) {
  return Number(cad) || "no se puede convertir"
}
```

Repetir la letra "r" al final de la cadena "A" tantas veces como indique el argumento.
Si el argumento es menor o igual a cero, devolver "Shhh"

```javascript
function pirata_gritando(n) {
  return n > 0 ? "A" + "r".repeat(n) : "Shhh"
}
```

Crear una funcion que calcule el cuadrado de un número pasado como argumento
y otra que calcule su y raíz cuadrada.

```javascript
function cuadrado_de(num) {
  return num ** 2
}

function raiz_cuadrada_de(num) {
  return num ** 0.5
}
```
