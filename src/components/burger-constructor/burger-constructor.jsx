import React from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Info from '../burger-constructor-info/burger-constructor-info';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import {IngredientsContext} from '../../utils/context';
import {getOrderData} from '../../utils/api';

function BurgerConstructor() {
  const {data} = React.useContext(IngredientsContext);
  const [openModal, setOpenModal] = React.useState(null);
  const [order, setOrder] = React.useState(null);

  const ingredients = React.useMemo(() => data.filter((item) => item.type !== 'bun' ), [data]);
  const ingredientBun = React.useMemo(() => data.find((item) => item.type === 'bun'), [data]);
  const bun = ingredientBun === undefined ? 0 : ingredientBun.price
  const contralPrice = React.useMemo(() => bun * 2 + ingredients.reduce((value,item) => value + item.price, 0),[bun,ingredients] );

  const getOrder = () => {
    const id = ingredients.map(item => item._id);
    setOpenModal(true);
    getOrderData(id)
      .then(res =>{setOrder(res.order.number)})
      .catch((eror) => console.log(`Ошибка ${eror}`))
  };

  return (
    <section className={`${styles.section} pt-25`}>
      <div className='pl-4'>
        <div className='pr-4 pb-4 pl-8 '>
          {!ingredientBun ? null :
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={ingredientBun.price}
            thumbnail={ingredientBun.image}
          />}
        </div>

        <div className={styles.list}>
        {ingredients.map((item) => {
            return (
              <div key={item._id} className={`${styles.containerElement} pt-4 pr-2`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            )
          })}
        </div>

        <div className='pt-4 pr-4 pl-8'>
        {!ingredientBun ? null :
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={ingredientBun.price}
            thumbnail={ingredientBun.image}
          />}
        </div>

        <Info contralPrice={contralPrice} openModal={getOrder} />
      </div>
      {openModal && (<Modal closeModal={() => setOpenModal(false)}> <OrderDetails order={order}/> </Modal>)}
    </section>
  );
}

export default BurgerConstructor;