const personas = [
    { nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad:28}
];

// Usa .find() para buscar a la persona con nombre "Luis".
const nombreluis = personas.find(persona => persona.nombre === "luis");
console.log("Persona con nombre: " + nombreluis);
// Usa .forEach() para imprimir el nombre de cada persona con su edad.
personas.forEach(persona =>
{
    console.log(persona.nombre + " tiene " + persona.edad + " años");
}
);
// Usa. Reduce() para sumar todas las edades y obtener un total.
const totaledad = personas.reduce((acum, persona) => acum + persona.edad, 0);
console.log("suma total de las edades: " + totaledad);