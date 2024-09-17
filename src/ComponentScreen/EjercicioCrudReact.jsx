import { useState, useEffect } from "react";
import axios from "axios";

export const EjercicioCrudReact = () => {
  const [data, setData] = useState([]);
    
  const Load = async () => {
    const url = 'https://api.escuelajs.co/api/v1/users';
    const result = await axios.get(url);
    const resultData = await result;
    setData(resultData.data);    
}

const handleError = (e) => {
  e.target.src = '../assets/img/unkuser.jpg';
};

useEffect(() => {
  Load();
}, []);

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
              <a className="nav-link" aria-current="page" href="/ejercicioReactJS2">Ejercicio React Js2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/EjercicioCrudReact">Ejercicio CRUD React</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/EjercicioCrudReactP2">Ejercicio CRUD React p2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/EjercicioCrudLocalStorage">CRUD Local Storage</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <section className="container mt-4 mb-1 show" id="crud1">
          <div className="text-start" id="employees">
            <h5>CRUD React JS Parte 1 | fecha: 10/09/2024</h5>
          </div>
          <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9" style={{ paddingright: "7px" }} >
              <div className="row h4 pb-1 mb-5 border-bottom border-danger font-size-12 font-family-app">Listado de Usuarios</div>
            <div className="row g-3 align-items-center">
              <div className="row col-lg-12 col-md-12 col-sm-12">
              <div className="bd-example">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Name</th>
                      <th scope="col">Password</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">CreationAt</th>
                      <th scope="col">UpdateAt</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((item) => (
                  <tr key={item.id}>
                    <td scope="row">{item.id}</td>
                    <td> <div className="text-center"><img src={item.avatar} width="40px" className="rounded" alt="..." onError={handleError} /></div></td>                    
                    <td> {item.name} </td>
                    <td> {item.password} </td>
                    <td> {item.email} </td>
                    <td> {item.role} </td>
                    <td> {item.creationAt} </td>
                    <td> {item.updatedAt} </td>
                  </tr>
                ))}
                  </tbody>
                </table>
              </div>
              </div>           
            </div>
          </div>
          <br></br>
        </section>
      </div>
    </>
  );
};
