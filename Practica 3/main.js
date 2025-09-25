import { restar } from "./utils.js";

console.log("10 - 4 = ", restar(10, 4));
console.log("5 - 8 = ", restar(5, 8));
console.log("6 - 3 = ",restar(6, 3));

function verificarUsuario(usuario){
      return new Promise((resolve, reject) =>
      {
        if (usuario === "admin")
        {
            resolve ("Acceso concedido");
        }else
        {
            reject("Acceso denegado");
        }
      }
    );
}
verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.error(err));

verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.error(err));

function simularPeticionAPI()
{
    return new Promise(resolve => 
    {
        setTimeout(() =>
        {
            resolve("Datos recibidos correctamente");
        }, 5000);
    }
    );
}
async function obtenerDatos()
{
    console.log("Esperando datos...");
    const datos = await simularPeticionAPI();
    console.log(datos);
}
obtenerDatos();