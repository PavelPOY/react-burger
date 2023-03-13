import React from 'react';
import styles from './ingredient-details.module.css';
import { dataPropTypes } from '../../utils/prop-types';

function IngredientDetails({item}) {
  return(
    <div className={`${styles.wrapper} pt-10 pb-15 `} >
      <h2 className={`${styles.title} text text_type_main-large pl-10`}>Детали ингредиента</h2>
      <img  src={item.image_large} alt={item.name}/>
      <h3 className='text text_type_main-medium pt-4 pb-8'>{item.name}</h3>
      <ul className={styles.items}>
        <li className={styles.item}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Калории,ккал</p>
          <p className='text text_type_digits-default text_color_inactive'>{item.calories}</p>
        </li>

        <li className={styles.item}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Белки,  г</p>
          <p className='text text_type_digits-default text_color_inactive'>{item.proteins}</p>
        </li>

        <li className={styles.item}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Жиры,  г</p>
          <p className='text text_type_digits-default text_color_inactive'>{item.fat}</p>
        </li>

        <li className={styles.item}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Углеводы,  г</p>
          <p className='text text_type_digits-default text_color_inactive'>{item.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}

IngredientDetails.propTypes = {
  item: dataPropTypes.isRequired,
}

export default IngredientDetails;