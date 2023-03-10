import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Info from '../burger-constructor-info/burger-constructor-info';
import { dataPropTypes } from '../../utils/prop-types';

function BurgerConstructor({ data }) {
  const ingredients = React.useMemo(() => data.filter((item) => item.type !== 'bun' ), [data]);
  const ingredientBun = React.useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
  const contralPrice = React.useMemo(() => ingredientBun[0].price * 2 + ingredients.reduce((value,item) => value + item.price, 0),[ingredientBun,ingredients] );

  return (
    <section className={`${styles.section} pt-25`}>
      <div className='pl-4'>
        <div className='pr-4 pb-4 pl-8 '>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={ingredientBun[0].price}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
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
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={ingredientBun[1].price}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>

        <Info contralPrice={contralPrice}/>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
}

export default BurgerConstructor;