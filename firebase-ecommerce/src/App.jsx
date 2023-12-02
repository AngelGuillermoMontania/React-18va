import { Button, Text, Container, Box } from "@chakra-ui/react";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "../firestore.config";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [productos, setProductos] = useState([]);

  // window.addEventListener("load", async () => {
  //   let data = [];
  //   const coleccion = collection(db, "Calzado");
  //   const docs = await getDocs(coleccion);
  //   docs.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     data.push({ ...doc.data(), id: doc.id });
  //   });
  //   setProductos(data);
  // });

  function consultarDocumentos() {
    const coleccion = collection(db, "Calzado");
    getDocs(coleccion).then((docs) => {
      docs.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setProductos([...productos, { ...doc.data(), id: doc.id }]);
      });
    });

    // const coleccion = collection(db, "Calzado");
    // const docs = await getDocs(coleccion);
    // docs.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   setProductos([...productos, { ...doc.data(), id: doc.id }]);
    // });
  }

  return (
    <Box bgGradient="linear(to-l, #bebebf, #a9ad27)" w="100vw" h="100vh">
      <Header />
      <Button variant="outline" mt="7rem" onClick={() => consultarDocumentos()}>
        CONSULTAR DOCUMENTOS
      </Button>

      {productos.map((calzado) => {
        return <Text>marca: {calzado.marca}</Text>;
      })}
    </Box>
  );
}

export default App;

/* --------- Busca todos los datos de una coleccion ------------ */
// const coleccion = collection(db, "Calzado");
// const docs = await getDocs(coleccion);
// docs.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   setProductos([...productos, { ...doc.data(), id: doc.id }]);
// });

/* ---------- BUSCAR DATOS PERO CON FILTRO   ------------ */
// // Accedo a la coleccion
// const coleccion = collection(db, "Calzado");
// // Ejecuto el query
// const q = query(coleccion, where("categoria", "==", "Urbanas"));
// // Accedo a los documentos
// const docs = await getDocs(q);
// // Recorro los documentos
// docs.forEach((doc) => {
//   console.log(doc.id, doc.data());
// });

/* -------- BUSCAR UN SOLO DATO O DOCUMENTO ------- */

// Accedo a la referencia de un documento con id "5mxcCHiZB0nCvoojU6Ji"
// const docRef = doc(db, "Calzado", "5mxcCHiZB0nCvoojU6Ji");
// // Obtengo el documento de firestore
// const docSnap = await getDoc(docRef);
// // Pregunto si existe ese documento, con ese id
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   console.log("No such document!");
// }

/* -------- (POST) Agrega datos a la base de datos --------- */
// Accedo a la coleccion
// const coleccion = collection(db, "Calzado");
// // Agrego un documento a la coleccion y le crea un id automaticamente
// const doc = await addDoc(coleccion, {
//   categoria: "Urbanas",
// });

/* -------- (PUT) Actualiza datos de la base de datos ---------- */
// const nuevoCalzadoRef = doc(db, "Calzado", "5mxcCHiZB0nCvoojU6Ji");
// // Set the "capital" field of the city 'DC'
// await updateDoc(nuevoCalzadoRef, {
//   categoria: "Deportivas",
//   precio: "180000",
// });

/* --------- (DELETE) Eliminar un documento --------- */
// const docRef = doc(db, "Calzado", "5mxcCHiZB0nCvoojU6Ji");
// await deleteDoc(docRef);

/* ---------- DIFERENCIA ENTRE SET, ADD y UPDATE -------------- */
/* setDoc = Agrega si no existe o actualiza si existe, necesita que le pase el id */
/* addDoc = Siempre agrega, y coloca el id automaticamente */
/* updateDoc = Actualiza un documento, espera el id */
