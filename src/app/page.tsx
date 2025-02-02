'use client';
import styles from "../app/css/home.module.css";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import Link from "next/link";
import Image from "next/image";
import { Mesa } from "./interface/mesa"; 
import { Reservas } from "./interface/reserva"; 

const Home = () => {
  const router = useRouter();
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [reservas, setReservas] = useState<Reservas[]>([]);
  const [formReserva, setFormReserva] = useState<Reservas>({
    id:0,
    usuario_id: 0,
    mesa_id:0,
    data: "",
    n_pessoas:0,
    status: true
  })
   //console.log(formReserva["data"])
   //key , value
   function alterFormReservas<K extends keyof Reservas>(key: K, value: Reservas[K]){
    console.log(key, value)
   /* setFormReserva((prevForm) => ({
      ...prevForm,

    }) )*/
   }
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [dateTables, setDateTables] = useState<string>(""); // Ajuste conforme necessário

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3333/reservas');
      const data = await response.json();
      setMesas(data.mesas);
      setReservas(data.reservas);
    }

    fetchData(); 
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
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
            <Image
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
          {mesas.map((table) =>
            reservas.find(reserva => dateTables === reserva.data && reserva.mesa_id === table.id) ? (
              <button
                key={table.id}
                className="p-4 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-700"
                onClick={() => setSelectedTable(table.codigo)}
              >
                {table.codigo}
              </button>
            ) : null
          )}
        </div>

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

export default Home;
