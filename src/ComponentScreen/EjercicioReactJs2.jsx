import { useState } from "react";
import {alerta} from "../js/functions.js";

export const EjercicioReactJs2 = () => {
  
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [notaFinal, setNotafinal] = useState('');
  const [mensaje, setMensaje] = useState('');
    
  const Limpiar = () => {
    setNota1(0);
    setNota2(0);
    setNota3(0);
    setNotafinal(0);
    setMensaje('');
  }

  const Calcular = () => {
    
    if (nota1 > 30 || nota1 < 0){
      alerta('La nota1 ingresada {'+nota1+'} no puede ser mayor a 30', 'warning');
      return;
  }

  if (nota2 > 30 || nota2 < 0){
    alerta('La nota2 ingresada {'+nota2+'} no puede ser mayor a 30', 'warning');
    return;
  }

  if (nota3 > 40 || nota3 < 0){
    alerta('La nota3 ingresada {'+nota3+'} no puede ser mayor a 40', 'warning');
    return;
  }

  let lnotaFinal = nota1 + nota2 + nota3;
  let lmensaje = "";

  if (lnotaFinal <= 59) {
    lmensaje = 'Reprobado';
    alerta(lmensaje, 'error');
  } else if (lnotaFinal >= 60 && lnotaFinal <= 79) {
    lmensaje = 'Bueno';
    alerta(lmensaje, 'success');
  } else if (lnotaFinal >= 80 && lnotaFinal <= 89) {
    lmensaje = 'Muy Bueno';
    alerta(lmensaje, 'success');
  } else if (lnotaFinal >= 90 && lnotaFinal <= 100) {
    lmensaje = 'Sobresaliente';
    alerta(lmensaje, 'success');
  } else {
    lmensaje = 'Lo sentimos, existe un error al calcular las notas.';
    alerta(mensaje, 'error');
  }

  setMensaje(lmensaje);
  setNotafinal(lnotaFinal);
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
              <a className="nav-link" aria-current="page" href="/EjercicioReactJs">Ejercicio React Js</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/ejercicioReactJS2">Ejercicio React Js2</a>
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
            <h5>Ejercicio React Js2 | fecha: 02/09/2024</h5>
          </div>
          <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9 form" style={{ paddingright: "7px" }} >
            <div className="h4 pb-1 mb-5 border-bottom border-danger font-size-12 font-family-app">Registro de Notas</div>
            <div className="row g-3 align-items-center">
              <div className="row col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mb-1">
                    <input onChange={(e) => setNota1(parseFloat(e.target.value))} type="number" className="form-control text-align-right" name="nota1" id="nota1" placeholder="Ingrese un valor" min="0" max="30" value = {nota1} tabIndex={1}/>
                    <div id="eje3Nota1Help" className="form-text">Nota del primer periodo</div>
                    <span id="error-eje3Nota1HelpMsg" className="error" hidden>La nota m&aacute;xima v&aacute;lida es 30</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mb-1">
                  <input onChange={(e) => setNota2(parseFloat(e.target.value))} type="number" className="form-control text-align-right" name="nota2" id="nota2" placeholder="Ingrese un valor" min="0" max="30" value = {nota2} tabIndex={2}/>
                    <div id="eje3Nota2Help" className="form-text">Nota del segundo periodo</div>
                    <span id="error-eje3Nota2HelpMsg" className="error" hidden>La nota m&aacute;xima v&aacute;lida es 30</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mb-1">
                    <input onChange={(e) => setNota3(parseFloat(e.target.value))} type="number" className="form-control text-align-right" name="nota3" id="nota3" placeholder="Ingrese un valor" min="0" max="40" value = {nota3} tabIndex={3}/>
                    <div id="eje3Nota3Help" className="form-text">Nota del tercer periodo</div>
                    <span id="error-eje3Nota3HelpMsg" className="error" hidden>La nota m&aacute;xima v&aacute;lida es 40</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mb-1">
                    <input disabled type="text" className="form-control text-left" id="eje3NotaFinal" value={notaFinal} aria-describedby="eje3NotaFinalHelp"/>
                    <div id="eje3NotaFinalHelp" className="form-text">Notal Final</div>
                    <span id="error-eje3Nota3HelpMsg" className="error" hidden>La nota final supera el valor m&aacute;ximo de 100</span>
                  </div>
                </div>
              </div>
              <p className="card-text mt-3 mb-3">
                <button onClick={() => Limpiar()}  className="btn btn-secondary btn-sm" id="eje3_btonLimpiar" tabIndex={6}>Limpiar</button>&nbsp;
                <button onClick={() => Calcular()} className="btn btn-primary btn-sm" id="eje3_btonCalcular" tabIndex={5}>Calcular</button>
              </p>            
            </div>
          </div>
          <br></br>
        </section>
      </div>
    </>
  );
};
