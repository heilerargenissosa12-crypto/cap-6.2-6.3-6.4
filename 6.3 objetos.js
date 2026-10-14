// Función Constructora para crear objetos de tipo Persona
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        return "Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años.";
    };
}

// Creando una instancia con el operador new
let usuario1 = new Persona("Carlos", 28);
console.log(usuario1.saludar());