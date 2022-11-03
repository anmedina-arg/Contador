import React from "react";
import { Contador } from "./components/contador";
import { Titulo } from "./components/titulo.jsx";
import styles from "../src/styles/app.module.css";

function App() {
  return (
    <div className={styles.app_container}>
      <Titulo />
      <Contador />
    </div>
  );
}

export default App;
