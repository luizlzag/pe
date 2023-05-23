'use client';
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import getProducts from '@/api/getProducts';
import { formatCurrency } from '@/utils/formatCurrency';
import {IoAddCircleOutline} from 'react-icons/io5';


export default async function Card() {

  /*const query = '';*/

  const products = getProducts();

  return (
    <>
      {products.map((product) => {
        return(
          <div key={product.id} className={styles.card}>
            <div className={styles.description}>
              <h3>{product.descricao}</h3>
              <p>{product.barra}</p>
              <p>{formatCurrency(product.preco,'BRL')}</p>
            </div>
            <div className={styles.add}>
              <button><IoAddCircleOutline size={24}/></button>
            </div>
          </div>
        );
      })}
    </>
  );
}
