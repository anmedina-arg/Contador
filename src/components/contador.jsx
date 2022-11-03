import React, { useState } from "react";
import style from "../styles/contador.module.css";

export function Contador() {
  let [contador, setContador] = useState(0);

  function add(e) {
    e.preventDefault();
    setContador(contador + 1);
  }

  function min(e) {
    e.preventDefault();
    setContador(contador - 1);
  }

  return (
    <div className={style.container}>
      <div className={style.element}>
        <h1 className={style.h1}>{contador}</h1>
      </div>
      <div className={style.element}>
        <button onClick={add} className={style.btn}>
          +
        </button>
        <button onClick={min} className={style.btn}>
          -
        </button>
      </div>
    </div>
  );
}
