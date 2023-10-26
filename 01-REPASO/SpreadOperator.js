const arr = [5, 10, 6, 9, 12, 7];
const arr2 = ["Ada", "Lovelace"];
//[("Ada", "Lovelace", 5, 10, 6, 9, 12, 7)];

const arrNuevo = [...arr2, ...arr];

const persona = {
  nombre: "Ada",
  apellido: "Lovelace",
  edad: 208,
  ocupacion: "Programadora",
};

const personaModificado = { ...persona, edad: 30 };

console.log(persona);
/* {
  nombre: "Ada",
  apellido: "Lovelace",
  edad: 208,
  ocupacion: "Programadora",
}; */

console.log(personaModificado);
/* {
  nombre: "Ada",
  apellido: "Lovelace",
  edad: 30,
  ocupacion: "Programadora",
}; */
