import React, { useState } from 'react';
import axios from 'axios';
import {alertReactCrud} from "../js/functions.js";

export const HookHelper = () => {
    
    const [result, setResult] = useState();
    const [data, setData] =useState([]);
    const [joperacion, setJoperacion] = useState();
    
    const [idUser, setIdUser] = useState('');
    const [jname, setJname] = useState('');
    const [jpassword, setJpassword] = useState('');
    const [jemail, setJemail] = useState('');
    const [jrole, setJrole] = useState('');
    const [javatar, setJavatar] = useState('');

    const getUsers = async () => {
        var numberOfItemsToShow = 200;

        const url = 'https://api.escuelajs.co/api/v1/users';
        const result = await axios.get(url);
        const resultData = await result;
    
        if (resultData.data.length > numberOfItemsToShow){
          alertReactCrud("La lista de usuarios es muy grande "+resultData.data.length+" usuarios, mostrando solo los primeros "+numberOfItemsToShow+" registros.", "warning");
          setData(resultData.data.slice(0, numberOfItemsToShow));
        } else {
          setData(resultData.data);
        } 
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (jname == null || jname.length == 0){
            alertReactCrud("El Name ingresado es incorrecto. {"+jname+"}", 'warning');
            return;
        }

        if (jpassword == null || jpassword.length == 0){
            alertReactCrud("El password ingresado es incorrecto.", 'warning');
            return;
        }

        if (jemail == null || jemail.length == 0){
            alertReactCrud("El Email ingresado es incorrecto.", 'warning');
            return;
        }

        if (jrole == null || jrole.length == 0){
            alertReactCrud("El Role ingresado es incorrecto.", 'warning');
            return;
        }

        if (javatar == null || javatar.length == 0){
            alertReactCrud("El Avatar ingresado es incorrecto.", 'warning');
            return;
        }

        const userObject = {
            name: jname,
            password: jpassword,
            email: jemail,
            role: jrole,
            avatar: javatar
        }

        var url;
        var resultApi;

        //console.info("submit objectUser", userObject);

        if (joperacion == 1){
            // Create //
            url = "https://api.escuelajs.co/api/v1/users/";
            resultApi = await axios.post(url, userObject, {headers: {"Content-Type":"application/json", "Accept":"application/json"}});
            //console.info("Creando ...");
        } else {
            // Update //
            url = "https://api.escuelajs.co/api/v1/users/"+idUser;
            resultApi = await axios.put(url, userObject, {headers: {"Content-Type":"application/json", "Accept":"application/json"}});
            //console.info("Actualizando ...");
        }
        
        try {
            const data = await resultApi;
            setResult(resultApi.data);
            //console.info("resultApi "+ resultApi.data.id);

            if (resultApi.data.id > 0){
                if (joperacion == 1) {
                    alertReactCrud("El usuario "+resultApi.data.name+" fue creado exitosamente.\n", 'success');
                } else {
                    alertReactCrud("El usuario "+resultApi.data.name+" fue actualizado exitosamente.\n", 'success');
                }
            } else {
                alertReactCrud("Ocurrio un error en el proceso.", 'error');
            }

            getUsers();
        } catch (error) {
        console.info(error.message || 'Error desconocido');
      }
    }

    const submitDeletetHandler = async (event) => {
        event.preventDefault();
        const url = "https://api.escuelajs.co/api/v1/users/"+idUser;
        const resultApi = await axios.delete(url);
        setResult(await resultApi.data);
        alertReactCrud("El registro fue borrado exitosamente.\n"+result, 'success');
        getUsers();
    }

    return {
        getUsers,
        data,
        setIdUser,
        setJname,
        setJpassword,
        setJemail,
        setJrole,
        setJavatar,
        setJoperacion,
        submitHandler,
        submitDeletetHandler
    }
}
