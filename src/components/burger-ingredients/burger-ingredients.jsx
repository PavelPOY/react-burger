import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burger-ingredients.module.css';
import Tabs from '../burger-ingredients-tabs/burger-ingredients-tabs';
import Сategory from '../burger-ingredients-сategory/burger-ingredients-сategory';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { typesIngredients } from '../../utils/constant';
import { CLOSE_INGREDIENT } from '../../services/actions/ingredient-details';

function BurgerIngredients() {
  const dispatch = useDispatch();
  const {ingredient} = useSelector(store => store.ingredientDetails);

  const bun = React.useRef(null);
  const sauce = React.useRef(null);
  const main = React.useRef(null);

  const buttonHandler = (tab) => {
    tab.current.scrollIntoView({behavior: 'smooth'});
  };

  const closeIngredientDetails = () => {
    dispatch({ type: CLOSE_INGREDIENT });
  };

  return (
    <section className={styles.section}>
      <h1 className='text text_type_main-large pt-10'>Соберите бургер</h1>
      <Tabs type={typesIngredients} bun={bun} sauce={sauce} main={main} buttonHandler={buttonHandler} />
      <div className={styles.category}>
        <Сategory componentRef={bun} type={typesIngredients.bun} text='Булки' />
        <Сategory componentRef={sauce} type={typesIngredients.sauce} text='Соусы' />
        <Сategory componentRef={main} type={typesIngredients.main} text='Начинки' />
      </div>
      {ingredient && (
        <Modal closeModal={closeIngredientDetails}>
          <IngredientDetails />
        </Modal>)}
    </section>
  );
}

export default BurgerIngredients;