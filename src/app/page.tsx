'use client'
import styles from "../app/css/home.module.css"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import Link from "next/link";

export default function Home(){
  
const router = useRouter();
  useEffect(() => {
  const {'reserva-token': token} = parseCookies()
    if (token){
      router.push('/Login')
    }
}, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="https://i.pinimg.com/736x/8a/c3/a4/8ac3a4c01746641d36b7c55069d0b0a7.jpg"
          className={styles.headerImage}
        />
        <h1 className={styles.title}>Confeitaria Vieira</h1>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>Sobre Nós</a>
          <a href="#menu" className={styles.navLink}>Menu</a>
          <a href="#contact" className={styles.navLink}>Contato</a>
          <a href="/Login" className={styles.loginLink}>Login</a>
        </nav>
      </header>
      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre Nós</h2>
          <div className={styles.aboutContent}>
            <img
              src="https://i.pinimg.com/736x/07/25/1e/07251e056efa3e18394cecfe86822f34.jpg"
              className={styles.aboutImage}
            />
            <p className={styles.text}>
              Bem-vindo à Confeitaria Vieira! Criamos doces e sobremesas com
              amor, usando os melhores ingredientes para oferecer momentos
              inesquecíveis. 
              <br/>Faça sua reserva e venha saborear os melhores doces da região!
            </p>
          </div>
        </section>
        <section id="menu" className={styles.section}>
          <h2 className={styles.sectionTitle}>Nosso Menu</h2>
          <div className={styles.menuGrid}>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/736x/5b/df/db/5bdfdbfd21e86dc67323ef916dd15cf9.jpg"
                className={styles.menuImage}
              />
              <p>Donuts</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/236x/b0/5c/83/b05c83b352090d184a3450a668132853.jpg"
                className={styles.menuImage}
              />
              <p>Bolos</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/236x/7b/67/b9/7b67b94b107f2efbd085089f48bdc2c8.jpg"
                className={styles.menuImage}
              />
              <p>Macarons</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/474x/69/2b/0d/692b0da0c60aa42836d6d1453e16938f.jpg"
                className={styles.menuImage}
              />
              <p>Brigadeiros</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/236x/7f/f8/7f/7ff87f880a861c5279f4bd3d45eca101.jpg"
                className={styles.menuImage}
              />
              <p>Cupcakes</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/236x/63/52/73/635273eeccd4a7901459c3d9c184aedb.jpg"
                className={styles.menuImage}
              />
              <p>Sorvetes</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/236x/e0/86/cd/e086cd858c564bf20a62811d068a7a67.jpg"
                className={styles.menuImage}
              />
              <p>Pão de Mel</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/236x/f7/5f/34/f75f3459a38c78d08a1328690e3cbcdc.jpg"
                className={styles.menuImage}
              />
              <p>Sonho de Padaria</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/236x/c0/c8/6c/c0c86ca39a4c55996319667f04091d08.jpg"
                className={styles.menuImage}
              />
              <p>Tortas</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/236x/d6/ba/2a/d6ba2a2d212a12609629dc6de636c8ef.jpg"
                className={styles.menuImage}
              />
              <p>Rocambole</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/736x/a9/9d/ed/a99ded685fd6dccc2f16c0a39770d96f.jpg"
                className={styles.menuImage}
              />
              <p>Brownie</p>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://i.pinimg.com/736x/f6/59/ba/f659bac91971c73c29fb7b60d7d4956e.jpg"
                className={styles.menuImage}
              />
              <p>Trufas</p>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contato</h2>
          <p className={styles.text}>Telefone: (99) 99999-9999</p>
          <p className={styles.text}>Endereço: Rua Doce, 123</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2024 Confeitaria Vieira. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}