const persona = {
  nombre: "Ada",
  apellido: "Lovelace",
  edad: 208,
  ocupacion: "Programadora",
};

const { nombre } = persona;
console.log(nombre); //  const nombre = "Ada"
const { edad } = persona;
console.log(edad); // const edad = 208

const { apellido, ocupacion } = persona;

const nombres = ["Vale", "Florencia", "Lorena"];

const [nombre1, , nombre3] = nombres;
console.log(nombre1); // const nombre1 = "Vale"
console.log(nombre3); // const nombre3 = "Lorena"

// Ejemplo practico
function nombreCompleto({ nombre, apellido }) {
  return nombre + " " + apellido;
}

console.log(nombreCompleto(persona)); // "Ada Lovelace"
