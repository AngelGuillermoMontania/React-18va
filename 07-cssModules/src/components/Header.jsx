import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [personas, setPersonas] = useState([{ nombre: "Guille" }]);

  function onHandleClick() {
    setPersonas([...personas, { nombre: "Sofi" }]);
  }

  return <div className={styles.title_primary}>Header</div>;
}
