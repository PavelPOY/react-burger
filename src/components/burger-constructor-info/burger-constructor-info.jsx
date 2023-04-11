import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styles from './burger-constructor-info.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrder } from '../../services/actions/order-details';

function Info() {
  const dispatch = useDispatch();
  const { other, contralPrice } = useSelector(store => store.burgerConstructor);

  const openOrder = () => {
    const id = other.map(item => item._id);
    dispatch(getOrder(id));
  };
  return (
    <div className={`${styles.info} pt-10 pr-4`}>
      <div className={`${styles.price} mr-10`}>
        <p className='text text_type_digits-medium pr-2'>{contralPrice}</p>
        <div className={`${styles.currencyIcon}`}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={openOrder}>Оформить заказ</Button>
    </div>
  );
}

export default Info;