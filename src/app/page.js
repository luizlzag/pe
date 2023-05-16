import Card from '@/components/Card/page';
import styles from './page.module.css';
import {FaSearch} from 'react-icons/fa';
import Cart from '@/components/Cart/page';
import React from 'react';


export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.search}>
          <input placeholder="Buscar"></input>
          <button>
            <FaSearch size={24}/>
          </button>
        </div>
        <Cart/>
      </header>
      <section className={styles.grid}>
        <Card/>
      </section>
    </main>
  );
}
