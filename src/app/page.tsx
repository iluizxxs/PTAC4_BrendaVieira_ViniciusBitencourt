'use client'
import styles from "../app/css/home.module.css"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
      <h1>HOME</h1>
      
    </div>
  );
};
