import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { dataPropTypes } from '../../utils/prop-types';

function Card({info}) {
  return (
    <div className={styles.card}>
      <Counter count={1} size='default' />
      <img src={info.image} alt={info.name} />
      <div className={`${styles.price} pt-2 pb-2`}>
        <p className='text text_type_digits-default pr-2'>{info.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={`${styles.name} text text_type_main-default`}>{info.name}</p>
    </div>
  )
}

Card.propTypes = {
  info: dataPropTypes.isRequired,
}

export default Card;