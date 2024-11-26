'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ApiURL } from "../config";
import { setCookie } from 'nookies';
import Usuario from '../interface/usuario';
import Styles from '../css/cadastro.module.css';

interface ResponseSignin{
  erro: boolean,
  mensagem: string,
  token?: string
}

export default function Cadastro() {
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState({ 
    nome: '',
    email: '',
    password: '',
    tipo: "cliente"
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const response = await fetch(`${ApiURL}/auth/cadastro`, {
        method: 'POST', 
        headers:{
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(usuario)
      });

      if(response){
        const data: ResponseSignin = await response.json();
        const { erro, mensagem, token = ''} = data;
        console.log(data);
        if(erro){
          setError(mensagem);
        }else{
          setCookie(undefined, 'reserva-token', token,{
            maxAge: 60 * 60 * 1 // 1 hora
          });
          router.push('/');
        }
      } else {
        setError("A resposta não foi encontrada!");
      }
      }catch(error){
        console.log("Erro de requisição!", error);
      }
    }

    const  alterarNome = (novoNome: string) => {
      setUsuario(
        (usuarioAnterior) => ({
          ...usuarioAnterior,
          nome: novoNome
        })
      );
    }

      const alterarEmail = (novoEmail: string)=>{
        setUsuario(
          (usuarioAnterior) => ({
            ...usuarioAnterior,
            email: novoEmail
          })
        );
      }

      const alterarPassword = (novaPassword: string)=>{
        setUsuario(
          (usuarioAnterior) => ({
            ...usuarioAnterior,
            email: novaPassword
          })
        );
      }

  return (
    <div className="cadastroContainer">
      <h1 className="cadastroTitle">Cadastro</h1>
      <form onSubmit={handleSubmit} className="cadastroForm">
        <div className="formGroup">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={usuario.nome}
            onChange={(e) => alterarNome(e.target.value)}
            className="formInput"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={usuario.email}
            onChange={(e) => alterarEmail(e.target.value)}
            className="formInput"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={usuario.password}
            onChange={(e) => alterarPassword(e.target.value)}
            className="formInput"
            required
          />
        </div>
        <button type="submit" className="submitButton">Cadastrar</button>
        {error && <p className="errorMessage">{error}</p>}
      </form>
      <p className="loginPrompt">
        Já possui conta? <a href="/Login" className="loginLink">Login</a>
      </p>
    </div>
  );
}