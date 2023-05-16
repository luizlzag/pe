import React from 'react';
import {IoIosAddCircleOutline} from 'react-icons/io';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import './page.modules.css';

export default function Product({data}){
  
  const { title, price } = data;
  return(
    <section className="product-card"> 
      <div className="card__infos">
        <h2 className="card__title">{title}</h2>
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
      </div>
      <button type="button" className="button__add-cart">
        <IoIosAddCircleOutline />
      </button>
    </section>
  );
}
Product.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
