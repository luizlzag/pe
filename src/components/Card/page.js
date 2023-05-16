'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Product from '../Product/page';
import fetchProducts from '../../api/fetchProducts';

export default function Card (){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);
  return(
    <div className={styles.card}>
      <section className="products_container">
        {products.map((product) => <Product key={product.id} data={product} />)}
      </section>
    </div>
  );
}
