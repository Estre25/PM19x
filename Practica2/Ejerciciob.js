const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
];

// Filtra los productos cuyo precio sea mayor a 1000.
const preciomayor = productos.filter(productos => productos.precio > 1000);
// Usa .map() para convertir el resultado en un nuevo arreglo con solo los nombres de esos productos.
const nombres = preciomayor.map(producto => producto.nombre);
// Imprime el mensaje
console.log(nombres);