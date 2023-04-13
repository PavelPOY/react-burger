import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import uuid from 'react-uuid';
import styles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import Info from '../burger-constructor-info/burger-constructor-info';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
import { ADD_BUN, ADD_OTHER_INGREDIENT } from '../../services/actions/burger-constructor';
import { CLOSE_ORDER } from '../../services/actions/order-details';
import { getBurgerConstructor } from '../../services/reducers';
import { getOrderDetails } from '../../services/reducers';

function BurgerConstructor() {
  const dispatch = useDispatch();
  const { bun, other } = useSelector(getBurgerConstructor);
  const { order } = useSelector(getOrderDetails);

  const closeOrder = () => {
    dispatch({ type: CLOSE_ORDER });
  };

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (item.ingredient.type === "bun") {
        dispatch({
          type: ADD_BUN,
          bun: item.ingredient,
        });
      } else {
        dispatch({
          type: ADD_OTHER_INGREDIENT,
          other: { ...item.ingredient, id: uuid()},
        });
      }
    },
  });

  return (
    <section className={`${styles.section} pt-25`}>
      <div className='pl-4' ref={dropTarget}>
        <div className='pr-4 pb-4 pl-8 '>
          {!!bun.price
            ?(<ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={bun.price}
              thumbnail={bun.image}
            />)
            : null
          }
        </div>

        <div className={styles.list}>
        {other.length === 0
            ? null
            : other.map((item, index) => {
              return item
                ? (<BurgerConstructorItem
                  key={item.id}
                  index={index}
                  item={item}
                />)
                : null;
            })}
        </div>

        <div className='pt-4 pr-4 pl-8'>
        {!!bun.price &&
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={bun.price}
            thumbnail={bun.image}
          />}
        </div>

        <Info />
      </div>
      {order && (<Modal closeModal={closeOrder}> <OrderDetails /> </Modal>)}
    </section>
  );
}

export default BurgerConstructor;