import React from "react";
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
import db from "../../firestore.config";
import { useState, useEffect } from "react";

function ContainCard() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const coleccion = collection(db, "Calzado");
    getDocs(coleccion).then((docs) => {
      let aux = [];
      docs.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        aux.push({ ...doc.data(), id: doc.id });
      });
      setProductos(aux);
    });
  }, []);

  return (
    <Box
      bgGradient="linear(to-l, #bebebf, #a9ad27)"
      pt="7rem"
      w="100vw"
      h="100vh"
    >
      {productos.map((calzado) => (
        <Text key={calzado.id}>marca: {calzado.descripcion}</Text>
      ))}
    </Box>
  );
}

export default ContainCard;
