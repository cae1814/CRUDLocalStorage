import { useState } from "react";
//import { HookToEjercicioReactJs } from "../Hooks/HookToEjercicioReactJs";
import {alerta} from "../js/functions.js";

export const EjercicioReactJs = () => {
  //const {proc, x1, x2, com, isOk, changeHandler, submitHandler } = HookToEjercicioReactJs();
  //let ina, inb, inc;
  const [ina, setIna] = useState('1');
  const [inb, setInb] = useState('1');
  const [inc, setInc] = useState('1');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');
  const [com, setCom] = useState('');
  const [isOk, setIsOk] = useState('');
  
  const Limpiar = () => {
    setIna('1');
    setInb('1');
    setInc('1');
    setX1('');
    setX2('');
    setCom('');
  }

  const Calcular = () => {
    let in_a = parseInt(ina);
    let in_b = parseInt(inb);
    let in_c = parseInt(inc);

    if (in_a === 0){
      setCom('Divisor es 0, no puede ser procesado.');
      setX1("");
      setX2("");
      setIsOk(false);
      alerta('Divisor es 0, no puede ser procesado.', 'warning', 'inputa');
      return;
  }

  const d = in_b ** 2 - 4 * in_a * in_c;

  if (d > 0) {
      const x1 = (-in_b + Math.sqrt(d)) / (2 * in_a);
      const x2 = (-in_b - Math.sqrt(d)) / (2 * in_a);
      setX1(x1.toFixed(4));
      setX2(x2.toFixed(4));
      setIsOk(true);
      setCom(`Solución encontrada para x1 y x2`);
      alerta('Solución encontrada para x1 y x2.', 'success', 'inputa');
    } else if (d === 0) {
      console.info("else if d === 0");
      const x1 = -in_b / (2 * in_a);
      setX1(x1.toFixed(4));
      setX2("?");
      setCom(`Solución encontrada para x1 y x2`);
      alerta('Solución encontrada para x1 y x2.', 'success', 'inputa');
      setIsOk(true);
    } else {
      setX1("?");
      setX2("?");
      setCom(`No hay solucion`);
      alerta('No hay solucion', 'warning', 'inputa');
      setIsOk(false);
    }
  }

  return (
    <>
      <div className="mt-2 ml-4">
        <nav className="nav nav-pills nav-fill">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/EjercicioReactJs">Ejercicio React Js</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/ejercicioReactJS2">Ejercicio React Js2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/EjercicioCrudReact">Ejercicio CRUD React</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/EjercicioCrudReactP2">Ejercicio CRUD React p2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/EjercicioCrudLocalStorage">CRUD Local Storage</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <section className="container mt-4 mb-1 show" id="crud1">
          <div className="text-start" id="employees">
            <h5>Ejercicio React Js | fecha: 20/08/2024</h5>
          </div>
          <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9 form" style={{ paddingright: "7px" }} >
          <div className="h4 pb-1 mb-1 border-bottom border-danger font-size-12 font-family-app">Valores</div>
              <div className="row g-3 align-items-center">
                <div className="mt-4 col-auto">
                  <label htmlFor="labelInputA" className="form-label">Valor de <b>a</b></label>
                  <input onChange={(e) => setIna(e.target.value)} type="number" className="form-control text-align-right" name="inputa" id="inputa" placeholder="Ingrese un valor" value = {ina} tabIndex={1}/>
                  <span id="error-valueOfA" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="mt-4 col-auto">
                  <label htmlFor="labelInputB" className="form-label">Valor de <b>b</b></label>
                  <input onChange={(e) => setInb(e.target.value)} type="number" className="form-control text-align-right" name="inputb" id="inputb" placeholder="Ingrese un valor" value = {inb} tabIndex={2}/>
                  <span id="error-valueOfB" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="mt-4 col-auto">
                  <label htmlFor="labelInputC" className="form-label">Valor de <b>c</b></label>
                  <input onChange={(e) => setInc(e.target.value)} type="number" className="form-control text-align-right" name="inputc" id="inputc" placeholder="Ingrese un valor" value = {inc} tabIndex={3}/>
                  <span id="error-valueOfC" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="row align-items-center">
                  <div className="mt-1 col-auto">
                    <button onClick={() => Calcular()} type="button" className="btn btn-primary btn-md mt-4" tabIndex={4}>Calcular</button>&nbsp;&nbsp;
                    <button onClick={() => Limpiar()} type="button" className="btn btn-secondary btn-md mt-4" tabIndex={5}>Limpiar</button>&nbsp;&nbsp;
                  </div>
                </div>
              </div>
              <div className="mt-3 h4 pb-1 mb-1 border-bottom border-danger font-size-12 font-family-app">Resultado</div>
              <div className="row g-3 align-items-center">
                <div className="mt-3 mb-3 col-auto">
                  <label htmlFor="labelInputx1" className="form-label">Valor para x1</label>
                    <input disabled type="text" className="form-control text-align-right" id="inputx1" value={x1} tabIndex={5}/>
                </div>
                <div className="mt-3 mb-3 col-auto">
                  <label htmlFor="labelInputx2" className="form-label">Valor para x2</label>
                  <input disabled type="text" className="form-control text-align-right" id="inputx2" value={x2} tabIndex={6}/>
                </div>
                <div className="mt-3 mb-3 col-md-8">
                  <label htmlFor="labelInputx2" className="form-label">Comentario</label>
                  <input disabled type="text" className="form-control text-align-left" id="com" value={com} tabIndex={6}/>
                </div>
              </div>            
          </div>
          <br></br>
        </section>
      </div>
    </>
  );
};
