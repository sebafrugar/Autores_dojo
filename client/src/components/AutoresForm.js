import React, { useState } from 'react';

const Autoresform = (props) => {

    const {initialfirstName , initiallastName, onSubmitProp} = props;
    const [firstName, setFirstName] = useState(initialfirstName);
    const [lastName, setLastName] = useState(initiallastName);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({firstName,lastName});
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name :</label>
                <input type="text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
                <label>Last Name :</label>
                <input type="text" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
                <button type="submit">Enviar Autor</button>
            </form>
        </div>
    );
}

export default Autoresform;
