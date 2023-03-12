import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';
import Tabs from '../burger-ingredients-tabs/burger-ingredients-tabs';
import Сategory from '../burger-ingredients-сategory/burger-ingredients-сategory';
import { dataPropTypes } from '../../utils/prop-types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';


function BurgerIngredients({data}) {
  const [openModal, setOpenModal] = React.useState(null);
  const [ingredient, setIngredient] = React.useState(null);

  const open = (ingredient) => {
    setOpenModal(true);
    setIngredient(ingredient)
  };

  const typesIngredients = {
    bun: 'bun',
    sauce: 'sauce',
    main: 'main'
  }

  return (
    <section className={styles.section}>
      <h1 className='text text_type_main-large pt-10'>Соберите бургер</h1>
      <Tabs type={typesIngredients} />
      <div className={styles.category}>
        <Сategory openModal={open} type={typesIngredients.bun} text='Булки' data={data} />
        <Сategory openModal={open} type={typesIngredients.sauce} text='Соусы' data={data} />
        <Сategory openModal={open} type={typesIngredients.main} text='Начинки' data={data} />
      </div>
      {openModal && (
        <Modal closeModal={() => setOpenModal(false) }>
          <IngredientDetails item={ingredient} />
        </Modal>)}
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;