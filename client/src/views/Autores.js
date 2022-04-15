import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { autorsGet } from '../actions/autorsGet';
import Autoresform from '../components/AutoresForm';
import  axios  from 'axios';


const Autores = () => {

    const [autores, setAutores] = useState();
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);

    const getAutores = async() => {
        const response = await autorsGet("http://localhost:8000/api/autores");
        setAutores(response.autores)
    }

    useEffect(() => {
        getAutores();
    }, []);
    
    const crearAutor = (autor) => {

        axios.post("http://localhost:8000/api/autor/new", autor)
            .then(res => {
                console.log("autor creado");
                setAutores([...autores,res.data.autor])
            })
            .catch(err=>{
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                console.log(errorArr)
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
        }

    const eliminarAutor = (idAutor) => {
        fetch('http://localhost:8000/api/autor/delete/'+idAutor,{
            method:"DELETE"
        })
        .then(res => res.text())
        .then(res => {
            console.log("eliminado: ",res);
            getAutores();
        })
    }

    return (
        <div>
            <div>
                <h1>Favorite Authors</h1>
            </div>
            {errors?.map((err, i) => <p key={i}>{err}</p>)}
            <Autoresform initialfirstName="" initiallastName="" onSubmitProp={crearAutor}></Autoresform>
            {autores?.map((autor,i) =>{
                return(
                    <div key={i}>
                           
                        <p> {autor?.firstName} {autor?.lastName} </p>
                        <button onClick={()=> navigate("/api/autor/update/"+autor._id)}>Edit</button>
                        <button onClick={()=>eliminarAutor(autor._id)} >Eliminar Autor</button>
                    </div>
                )
            })}
        </div>
           
    );
}

export default Autores;
