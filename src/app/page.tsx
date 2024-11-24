'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { parseCookies } from 'nookies';

export default function Home(){
  
const router = useRouter();
  useEffect(() => {
  const {'reserva-token': token} = parseCookies()
    if (token){
      router.push('/Login')
    }
}, []);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} /> 
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <a href='/Cadastro'>Se Cadastre</a>
    </div>
  );
};
