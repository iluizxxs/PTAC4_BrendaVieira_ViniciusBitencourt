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
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="nome"
            id="nome"
            value={usuario.nome}
            onChange={(e) => alterarNome(e.target.value)} 
            required
            />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={usuario.email}
            onChange={(e) => alterarEmail(e.target.value)} 
            required
            />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={usuario.password}
            onChange={(e) => alterarPassword(e.target.value)} 
            required
            /> 
        </div>

        <button type="submit">Cadastrar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>Possui conta?</p>
      <a href='/Login'>Login</a>
    </div>
  );
};
