const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion:{
        ciudad: "Qro",
        pais: "Mx"
    }
};

// aplica destructuración
const {nombre, edad, direccion:{ciudad}}= persona
// Imprime el mensaje
console.log(saludo="Me llamo " + nombre + ", tengo " + edad + " años y vivo en " +  ciudad);