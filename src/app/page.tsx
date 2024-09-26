import Link from 'next/link';
import styles from './page.module.css';

export default function Home(){
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo à Página Inicial!</h1><br/>
      <Link href="/login">LOGIN</Link>
    </div>
  );
};
