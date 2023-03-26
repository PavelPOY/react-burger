import React from 'react';
import styles from './burger-ingredients.module.css';
import Tabs from '../burger-ingredients-tabs/burger-ingredients-tabs';
import Сategory from '../burger-ingredients-сategory/burger-ingredients-сategory';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {typesIngredients} from '../../utils/constant'

function BurgerIngredients() {
  const [ingredient, setIngredient] = React.useState(null);

  const bun = React.useRef(null);
  const sauce = React.useRef(null);
  const main = React.useRef(null);

  const buttonHandler = (tab) => {
    tab.current.scrollIntoView({behavior: 'smooth'});
  };

  const open = (ingredient) => {
    setIngredient(ingredient)
  };

  return (
    <section className={styles.section}>
      <h1 className='text text_type_main-large pt-10'>Соберите бургер</h1>
      <Tabs type={typesIngredients} bun={bun} sauce={sauce} main={main} buttonHandler={buttonHandler} />
      <div className={styles.category}>
        <Сategory componentRef={bun} ingredient={open} type={typesIngredients.bun} text='Булки' />
        <Сategory componentRef={sauce} ingredient={open} type={typesIngredients.sauce} text='Соусы' />
        <Сategory componentRef={main} ingredient={open} type={typesIngredients.main} text='Начинки' />
      </div>
      {ingredient && (
        <Modal closeModal={() => setIngredient(false) }>
          <IngredientDetails item={ingredient} />
        </Modal>)}
    </section>
  );
}

export default BurgerIngredients;