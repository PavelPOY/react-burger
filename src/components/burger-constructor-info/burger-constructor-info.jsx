import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styles from './burger-constructor-info.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrder } from '../../services/actions/order-details';
import { getBurgerConstructor } from '../../services/reducers';

function Info() {
  const dispatch = useDispatch();
  const { bun, other, contralPrice } = useSelector(getBurgerConstructor);

  const openOrder = () => {
    const id = [bun._id, ...other.map(item => item._id), bun._id];
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