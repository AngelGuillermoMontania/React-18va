import styles from "./Footer.module.css";
import { useState } from "react";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? styles.titleDark : styles.title}>Footer</div>
  );
}
