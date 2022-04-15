import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { autorsGet } from '../actions/autorsGet';
import Autoresform from '../components/AutoresForm';

const Autoredit = () => {

    let { id } = useParams();
    const [autor,setAutores] = useState();
    
    const navigate = useNavigate();

    const getAutor = async() => {
        const response = await autorsGet("http://localhost:8000/api/autor/"+id);
        setAutores(response.autor)
    }

    useEffect(()=> {
        getAutor()
    }, [])

    const editarAutor = (autor) => {
        fetch("http://localhost:8000/api/autor/update/"+id, {
        method: "PUT",
        body: JSON.stringify(autor),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("autor editado");
          console.log(res);
          navigate("/")
        });
    }


    
    return (
        <div>
            <h1> Editar autor : {autor?.firstName} {autor?.lastName}</h1>
            {autor && <Autoresform initialfirstName={autor.firstName} initiallastName={autor.lastName} onSubmitProp={editarAutor}></Autoresform>}
            <button onClick={()=>navigate("/")} >VOLVER</button>
        </div>
    )
}

export default Autoredit;
