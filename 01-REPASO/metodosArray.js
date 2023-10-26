const arr = ["Coco", "Lorena", "Laura"];

const nuevo = arr.forEach((elem) => elem + " Alumna Ada");
console.log(nuevo); //undefined

// LOS USADOS EN REACT COMUNMENTE SON MAP Y FILTER
// map
const nuevo2 = arr.map((elem) => elem + " Alumna Ada");
console.log(nuevo2); // ["Coco Alumna Ada", "Lorena Alumna Ada", "Laura Alumna Ada"]

// filter
