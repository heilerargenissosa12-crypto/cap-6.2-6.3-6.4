// Obtener la fecha y hora actual del sistema
let fechaActual = new Date();

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth() + 1; // Los meses empiezan en 0
let dia = fechaActual.getDate();

console.log("Hoy es: " + dia + "/" + mes + "/" + anio);