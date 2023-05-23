'use client'; 
import React,{useState,useEffect} from 'react';
import fetchProducts from '@/api/fetchProducts';
import './page.modules.css';
  
export default function Product( ){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts('2').then((response) => {
      setProducts(response);
    });
  }, []);
  console.log(products);
  return(
    <>
    </>    
  );
}

