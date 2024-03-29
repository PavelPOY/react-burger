import React from 'react';
import { useSelector } from 'react-redux';
import styles from './order-details.module.css';
import img from '../../images/icon.svg';
import { getOrderDetails } from '../../services/reducers';

function OrderDetails() {
  const { order } = useSelector(getOrderDetails);

  return(
    <div className={`${styles.wrapper} pt-30 pb-30`} >
      <h2 className='text text_type_digits-large'>{order}</h2>
      <p className='text text_type_main-medium pt-8'>идентификатор заказа</p>
      <img className='pt-15' src={img} alt='Ваш заказ начали готовить'/>
      <p className='text text_type_main-default pt-15'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive pt-2'>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails;