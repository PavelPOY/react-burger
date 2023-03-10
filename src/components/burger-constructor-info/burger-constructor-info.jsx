import React from 'react';
import styles from './burger-constructor-info.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

function Info({contralPrice}) {
  
  return (
    <div className={`${styles.info} pt-10 pr-4`}>
      <div className={`${styles.price} mr-10`}>
        <p className='text text_type_digits-medium pr-2'>{contralPrice}</p>
        <div className={`${styles.currencyIcon}`}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
    </div>
  );
}

export default Info;