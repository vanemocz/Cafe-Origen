const { ventas } = require("./datos");

// Cantidad de registros

console.log(ventas.length)

// Primer registro

console.log(ventas[0])

// Ultimo registro

console.log(ventas[ventas.length-1])

// Producto en posicion 4

console.log(ventas[3].producto)

// Tabla completa

console.table(ventas)