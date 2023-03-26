import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor-info.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

function Info({contralPrice,openModal}) {
  
  return (
    <div className={`${styles.info} pt-10 pr-4`}>
      <div className={`${styles.price} mr-10`}>
        <p className='text text_type_digits-medium pr-2'>{contralPrice}</p>
        <div className={`${styles.currencyIcon}`}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={openModal}>Оформить заказ</Button>
    </div>
  );
}

Info.propTypes = {
  contralPrice: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default Info;