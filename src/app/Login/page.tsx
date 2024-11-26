'use client'
import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ApiURL } from "../config";
import { stringify } from 'querystring';
import { setCookie } from 'nookies';
import { parseCookies } from 'nookies';
import Usuario from '../interface/usuario';


interface ResponseSignin{
  erro: boolean,
  mensagem: string,
  token?: string
}

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
  const {'reserva-token': token} = parseCookies()
    if (token){
      router.push('/')
    }
}, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const response = await fetch(`${ApiURL}/auth/login`, {
        method: 'POST', 
        headers:{
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({ email, password })
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

  return (
    <div className="loginContainer">
      <h1 className="loginTitle">Login</h1>
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="formGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="formInput"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="formInput"
          />
        </div>
        <button type="submit" className="submitButton">Login</button>
        {error && <p className="errorMessage">{error}</p>}
      </form>
      <a href="/Cadastro" className="signupLink">Se Cadastre</a>
    </div>
  );
}