'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ApiURL } from "../config";
import { setCookie } from 'nookies';
import Usuario from '../interface/usuario';
import styles from '../css/cadastro.module.css';

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
            password: novaPassword
          })
        );
      }

  return (
    <div className={styles.cadastroContainer}>
      <h1 className={styles.cadastroTitle}>Cadastro</h1>
      <form onSubmit={handleSubmit} className={styles.cadastroForm}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={usuario.nome}
            onChange={(e) => alterarNome(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={usuario.email}
            onChange={(e) => alterarEmail(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={usuario.password}
            onChange={(e) => alterarPassword(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Cadastrar
        </button>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
      <p className={styles.loginPrompt}>
        Já possui conta? <a href="/Login" className={styles.loginLink}>Login</a>
      </p>
    </div>
  );
}