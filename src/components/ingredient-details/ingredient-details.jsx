import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ingredient-details.module.css';
import { getIngredientDetails } from '../../services/reducers';

function IngredientDetails() {
  const { ingredient } = useSelector(getIngredientDetails);

  return(
    <div className={`${styles.wrapper} pt-10 pb-15 `} >
      <h2 className={`${styles.title} text text_type_main-large pl-10`}>Детали ингредиента</h2>
      <img  src={ingredient.image_large} alt={ingredient.name}/>
      <h3 className='text text_type_main-medium pt-4 pb-8'>{ingredient.name}</h3>
      <ul className={styles.items}>
        <li className={styles.item}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Калории,ккал</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.calories}</p>
        </li>

        <li className={styles.item}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Белки,  г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.proteins}</p>
        </li>

        <li className={styles.item}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Жиры,  г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.fat}</p>
        </li>

        <li className={styles.item}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Углеводы,  г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}

export default IngredientDetails;