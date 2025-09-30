"use client";
import Usuario from '../src/app/interface/usuario';
import PerfilUsuario from '../src/app/interface/usuario';
import { useEffect, useState } from 'react';

const Perfil = () => {
    const [usuario, setUsuario] = useState <Usuario | undefined> ();
    //useEffect(()=>{
       // setUsuario({nome:'Brenda'});

    //}, []);

   // {
       // nome: 'Luiz Carlos',
       // idade: 19,
       // email: ''
  //  }

    return(
        <div>
            <h1>Perfil</h1>
            {/*<PerfilUsuario usuario = {usuario} />*/}
        </div>
    );
};
export default Perfil;