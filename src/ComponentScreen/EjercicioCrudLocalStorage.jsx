import { useState, useEffect } from "react";
import {alertReactCrud, alertReactCrudOnFocus, closeModal} from "../js/functions.js";
import "../assets/font-awesome/css/font-awesome.min.css";

export const EjercicioCrudLocalStorage = () => {
  const [prov, setProv] = useState([]);
  var jsonProv = {};

  const [id, setId] = useState(100000);
  const [opId, setOpId] = useState();
  const [name, setName] = useState();
  const [document, setDocument] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [contactName, setContactName] = useState();
  const [img, setImg] = useState();

  const createStorage = () => {
    localStorage.setItem('provList', '');
  }

  const getProvList = () => {
    const localStorageProv = localStorage.getItem('provList')
    const parsedProv = localStorageProv ? JSON.parse(localStorageProv) : [];

    if (!Array.isArray(parsedProv)) {
      setProv([]);
    } else {
      setProv(parsedProv);
    }
  }

  const add = (jsonProv) => {
    try {
      getProvList();
      let lst = prov;
      lst.push(jsonProv);
      setProv(lst);
      localStorage.setItem('provList', JSON.stringify(prov));

      alertReactCrud('Proveedor agregado correctamente','success');
      getProvList();
    } catch (error) { 
      alertReactCrud('Lo sentimos, existe un error al crear el proveedor','error');
    }
  }

  const update = (jsonProv) => {
    getProvList();

    try {
      
      const index = prov.findIndex(prov => prov.id === id);
      
      if (index !== -1){
        prov[index] = jsonProv;
        localStorage.setItem('provList', JSON.stringify(prov));
      } else {
        alertReactCrud('Lo sentimos, se encontro ningun proveedor para modificar','error');  
      }

      getProvList();
      localStorage.setItem('provList', JSON.stringify(prov));

      alertReactCrud('Proveedor modificado correctamente','success');
    } catch (error) { 
      alertReactCrud('Lo sentimos, existe un error al modificar el proveedor','error');
    }
  }

  const remove = () => {
    getProvList();

    try {
      
      const provs = prov.filter(prov => prov.id !== id);
      setProv(provs);
      localStorage.setItem('provList', JSON.stringify(provs));

      alertReactCrud('Proveedor borrado correctamente','success');
    } catch (error) { 
      alertReactCrud('Lo sentimos, existe un error al borrar el proveedor','error');
    }
  }

  const getIdProv = () => {
    let seq = id + 1;
    setId(seq);
    
    return seq;
  }
  
  const createProvStruct = () => {
    jsonProv = {
      id: id,
      name: name,
      document: document,
      email: email,
      phone: phone,
      contactName, contactName,
      img: img
    }

    console.info("as "+jsonProv);

    return jsonProv;
  } 
  
  const start = () => {
    createStorage();
  }

  useEffect(() => {
    start();
  }, []);

const l_changeId = (p_id) => {
  setId(p_id);
}

const l_changeName = (p_name) => {
  setName(p_name);
}

const l_changeDocument = (p_document) => {
  setDocument(p_document);
}

const l_changeEmail = (p_email) => {
  setEmail(p_email);
}

const l_changePhone = (p_phone) => {
  setPhone(p_phone);
}

const l_changeContactName = (p_contact_name) => {
  setContactName(p_contact_name);
}

const l_changeImg = (p_img) => {
  setImg(p_img);
}

const l_submitHandler = (p_operation, p_id, p_name, p_document, p_email, p_phone, p_contact_name, p_img) => {
  setOpId(p_operation);

  if (p_operation == 1){  
    setId(getIdProv());
    setName("");
    setDocument("");
    setEmail("");
    setPhone("");
    setContactName("");
    setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcErt1YPb_8sECK5Fv57qKQSgvaDIsJaCw9A&s");
  } else {
    setId(p_id);
    setName(p_name);
    setDocument(p_document);
    setEmail(p_email);
    setPhone(p_phone);
    setContactName(p_contact_name);
    setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcErt1YPb_8sECK5Fv57qKQSgvaDIsJaCw9A&s");
  }
}

const submitHandler = (event) => {
  event.preventDefault();

  if (name == '') {
    alertReactCrudOnFocus('El Name del proveedor es invalido', 'warning', 'name');
  } else if (document == '') {
    alertReactCrudOnFocus('El Document del proveedor es invalido', 'warning', 'document');
  } else if (email == '') {
    alertReactCrudOnFocus('El email del proveedor es invalido', 'warning', 'email');
  } else if (phone == '') {
    alertReactCrudOnFocus('El phone del proveedor es invalido', 'warning', 'phone');
  } else if (contactName == '') {
    alertReactCrudOnFocus('El contact del proveedor es invalido', 'warning', 'contact');
  } else {
    if (opId == 1){
      add(createProvStruct());
    } else {
      update(createProvStruct());
    }
    
    closeModal('btonClose');
  }
}

const clear = () => {
  setId(100000);
  localStorage.removeItem('provList');
  setProv([]);
  getProvList();
}

const l_submitDeletetHandler = (id, name) => {
  setId(id);
  setName(name);
}

const submitDeletetHandler = () => {
  setId(id);
  setName(name);
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
              <a className="nav-link" aria-current="page" href="/ejercicioReactJS2">Ejercicio React Js2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/EjercicioCrudReact">Ejercicio CRUD React</a>
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
            <h5 className="font-size-17">CRUD React with LocalStorage | fecha: 17/09/2024</h5>
          </div>
          <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9" style={{ paddingright: "7px" }} >
            <div className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <div className="row h4 pb-1 mb-5 border-bottom border-danger font-size-16 font-family-app">Listado de Proveedores</div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3 text-end">
                  <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => l_submitHandler(1)} data-bs-toggle="modal" data-bs-target="#confEdit"><i className='fa fa-plus' style={{ fontSize: "16px" }}></i>&nbsp;Crear</button>&nbsp;
                  <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => start()}><i className='fa fa-refresh' style={{ fontSize: "16px" }}></i>&nbsp;Refrescar</button>&nbsp;
                  <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => clear()}><i className='fa fa-trash-o' style={{ fontSize: "16px" }}></i>&nbsp;Borrar datos</button>&nbsp;
                </div>
              </div>
            <div className="row g-3 align-items-center">
              <div className="row col-lg-12 col-md-12 col-sm-12">
              <div className="bd-example">
                <table className="table table-hover font-size-13">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Img</th>
                      <th scope="col">Name</th>
                      <th scope="col">Document</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Contact Name</th>
                      <th scope="col"></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  { prov.length > 0 ?
                    prov.map((item) => (
                    <tr key={item.id}>
                      <td scope="row">{item.id}</td>
                      <td><div className="text-start"><img src={item.img} width="40px" className="rounded" alt="..." /></div></td>                    
                      <td>{item.name}</td>
                      <td>{item.document}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.contactName}</td>
                      <td>
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => l_submitHandler(2, item.id, item.name, item.document, item.email, item.phone, item.contactName, item.img)} data-bs-toggle="modal" data-bs-target="#confEdit"><i className='fa fa-edit' style={{ fontSize: "16px" }}></i>&nbsp;Editar</button>&nbsp;
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => l_submitDeletetHandler(item.id, item.name)} data-bs-toggle="modal" data-bs-target="#confDelete"><i className='fa fa-trash-o' style={{ fontSize: "16px" }}></i>&nbsp;Borrar</button>
                      </td>
                    </tr>
                    )) : 
                      <tr>
                        <th colSpan={8} className="font-size-14 text-center font-color-red">No se encontraron registros que mostrar</th>
                      </tr>
                  }
                  </tbody>
                </table>
              </div>
              </div>           
            </div>
          </div>
          <br></br>
        </section>
      </div>

      <div className="modal fade" id="confDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="staticBackdropLabel" style={{ fontSize: "14px"}} ><b>Ejercicio Crud LocalStorage | Delete Proveedor</b></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p style={{ fontSize: "16px"}}><span className="font-color-red"><i className='fa fa-exclamation-triangle' style={{ fontSize: "17px" }}></i>&nbsp;<b>Cuidado!</b></span></p>
              <p style={{ fontSize: "16px"}}>¿Esta seguro que desea borrar el proveedor <b>{name}</b>?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary btn-sm" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={remove} data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="confEdit" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="staticBackdropLabel" style={{ fontSize: "14px"}} ><b>Crud React LocalStorage | Prov Management</b></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card" style={{ width: "100%"}}>
                <div className="text-center mt-3">
                  <img src={img} className="card-img-top" alt="..." style={{ width: "30%"}} />
                </div>
                  <div className="card-body">
                  <form onSubmit={submitHandler}>
                      <legend className="font-size-17 text-center"><b>{name}</b></legend>
                      <div className="mb-2">
                        <label htmlFor="name" className="form-label font-size-14">Name</label>
                        <input type="text" name="name" id="name" className="form-control font-size-14" placeholder="Name for user" value={name} onChange={(e) => l_changeName(e.target.value)} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="password" className="form-label font-size-14">Document</label>
                        <input type="text" name="document" id="document" className="form-control font-size-14" placeholder="document for proveedor" value={document} onChange={(e) => l_changeDocument(e.target.value)} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="email" className="form-label font-size-14">Email</label>
                        <input type="email" name="email" id="email" className="form-control font-size-14" placeholder="Email for user" value={email} onChange={(e) => l_changeEmail(e.target.value)} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="phone" className="form-label font-size-14">Phone</label>
                        <input type="text" name="phone" id="phone" className="form-control font-size-14" placeholder="phone for proveedor" value={phone} onChange={(e) => l_changePhone(e.target.value)} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="contact" className="form-label font-size-14">Contact Name</label>
                        <input type="text" name="contact" id="contact" className="form-control font-size-14" placeholder="contact for proveedor" value={contactName} onChange={(e) => l_changeContactName(e.target.value)} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="contact" className="form-label font-size-14">Logo</label>
                        <input disabled type="text" name="logo" id="logo" className="form-control font-size-14" placeholder="logo for proveedor" value={img} onChange={(e) => l_changeImg(e.target.value)} />
                      </div>
                      <button type="submit" className="btn btn-primary btn-sm"><i className='fa fa-check-square' style={{ fontSize: "16px" }}></i>&nbsp;Guardar</button>                    
                  </form>
                  </div>
                </div>
              </div>
            <div className="modal-footer">
              <button id="btonClose" type="button" className="btn btn-outline-primary btn-sm" data-bs-dismiss="modal"><i className='fa fa-reply' style={{ fontSize: "16px" }}></i>&nbsp;Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
