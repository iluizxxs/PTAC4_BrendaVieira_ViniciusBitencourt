"use client"
import styles from "../app/css/home.module.css";
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import Link from "next/link";

export default function Home() {


  const router = useRouter();
  useEffect(() => {
    const { 'restaurant-token': token } = parseCookies()
    if (!token) {
      router.push('/')
    }
  }, [router])
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="https://i.pinimg.com/736x/8a/c3/a4/8ac3a4c01746641d36b7c55069d0b0a7.jpg"
          alt="Banner Confeitaria Vieira"
          width={500}
          height={300}
          className={styles.headerImage}
        />
        <h1 className={styles.title}>Confeitaria Vieira</h1>
        <nav className={styles.nav}>
          <Link href="#about" className={styles.navLink}>Sobre Nós</Link>
          <Link href="#menu" className={styles.navLink}>Menu</Link>
          <Link href="#contact" className={styles.navLink}>Contato</Link>
          <Link href="/Login" className={styles.loginLink}>Login</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre Nós</h2>
          <div className={styles.aboutContent}>
            <img
              src="https://i.pinimg.com/736x/07/25/1e/07251e056efa3e18394cecfe86822f34.jpg"
              alt="Sobre a confeitaria"
              width={400}
              height={250}
              className={styles.aboutImage}
            />
            <p className={styles.text}>
              Bem-vindo à Confeitaria Vieira! Criamos doces e sobremesas com
              amor, usando os melhores ingredientes para oferecer momentos
              inesquecíveis.
              <br />Faça sua reserva e venha saborear os melhores doces da região!
            </p>
          </div>
        </section>

        <section id="menu" className={styles.section}>
          <h2 className={styles.sectionTitle}>Nosso Menu</h2>
          <div className={styles.menuGrid}>
            {/* Menu items */}
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
};

