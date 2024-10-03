import Link from 'next/link';
import styles from './page.module.css';
import { useState } from 'react';
import PerfilUsuario from "../app/interface/usuario"
import Usuario from '../app/interface/usuario';

const  PaginaPerfil = () =>{
  const [usuario, setUsuario] = useState<Usuario>
  setUsuario({nome: 'Jose', idade: 23})
  return(
    <div>
      <h1>Pagina Perfil</h1>
    </div>
  )
}

export default PaginaPerfil;
