import styles from './page.module.css';
import {BsCart3} from 'react-icons/bs';
import React from 'react';

export default function Cart(){
  return(
    <div className={styles.cart}>
      <button><BsCart3 size={24}/>
      </button>
    </div>
  );
}
