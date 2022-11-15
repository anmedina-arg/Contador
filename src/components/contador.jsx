import React, { useState, useEffect } from "react";
import style from "../styles/contador.module.css";

export function Contador() {
  let [contador, setContador] = useState(0);

  function min(e) {
    e.preventDefault();
    setContador(contador - 1);
  }

  function debounce(funcion, tiempo) {
    let timeoutID;
    let acumulador = contador;
    console.log(timeoutID);
    return function(num) {
      acumulador = acumulador + num;
      if (timeoutID) {
        console.log("clear", timeoutID);
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => {
        funcion(acumulador);
      }, tiempo);
    };
  }

  const add1Debounce = debounce(setContador, 1000);

  return (
    <div className={style.container}>
      <section className={style.counter_container}>
        <div>
          <h3>Contador SIN debounce</h3>
          <span className={style.contador}>{contador}</span>
        </div>
        <div>
          <h3>Contador CON debounce</h3>
          <span className={style.contador}>{contador}</span>
        </div>
      </section>
      <div className={style.btn_container}>
        <button onClick={() => add1Debounce(1)}>+</button>
        <button onClick={min}>-</button>
      </div>
    </div>
  );
}
