import React from 'react';
import styles from './burger-ingredients.module.css';
import Tabs from '../burger-ingredients-tabs/burger-ingredients-tabs';
import Сategory from '../burger-ingredients-сategory/burger-ingredients-сategory';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {typesIngredients} from '../../utils/constant'

function BurgerIngredients() {
  const [ingredient, setIngredient] = React.useState(null);

  const open = (ingredient) => {
    setIngredient(ingredient)
  };

  return (
    <section className={styles.section}>
      <h1 className='text text_type_main-large pt-10'>Соберите бургер</h1>
      <Tabs type={typesIngredients} />
      <div className={styles.category}>
        <Сategory ingredient={open} type={typesIngredients.bun} text='Булки' />
        <Сategory ingredient={open} type={typesIngredients.sauce} text='Соусы' />
        <Сategory ingredient={open} type={typesIngredients.main} text='Начинки' />
      </div>
      {ingredient && (
        <Modal closeModal={() => setIngredient(false) }>
          <IngredientDetails item={ingredient} />
        </Modal>)}
    </section>
  );
}

export default BurgerIngredients;