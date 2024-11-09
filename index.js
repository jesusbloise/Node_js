// console.log("Hola Node Js");

// const fecha = new Date()
// console.log(fecha)

// const fs = require('fs')

// const tareas = `
//     1. Ir al gym
//     2. Buscar al niño al colegio
//     3. Pagar los impuestos
// `
// fs.writeFileSync('tareas.txt', tareas)

// const fs = require('fs')
// const test = `
//     1. Ir al gym
//     2. Buscar al niño al colegio
//     3. Pagar los impuestos
// `
// fs.writeFileSync('test.doc', test)

// const fs = require('fs')
// const calculo = `
//     1. Ir al gym
//     2. Buscar al niño al colegio
//     3. Pagar los impuestos
// `
// fs.writeFileSync('calculo.xls', calculo)

const fs = require('fs')
const tareas = [
    { text: 'Ir al gimnasio' },
    { text: 'Buscar al niño al colegio' },
    { text: 'Pagar los gastos comunes' },
    { text: 'Cargar bencina' },
    { text: 'Pagar los gastos comunes' },
    { text: 'Cargar bencina' }
]
fs.writeFileSync('tareas.json', JSON.stringify(tareas) )
