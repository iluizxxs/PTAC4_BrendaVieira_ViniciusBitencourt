'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ApiURL } from "../config";
import { setCookie } from 'nookies';
import Usuario from '../interface/usuario';

interface ResponseSignin{
  erro: boolean,
  mensagem: string,
  token?: string
}

export default Cadastro() {
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState({ nome: "email: "}, )
}