import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import styles from './burger-ingredients-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { dataPropTypes } from '../../utils/prop-types';
import { OPEN_INGREDIENT } from '../../services/actions/ingredient-details';
import { getBurgerConstructor } from '../../services/reducers';

function Card({ingredient}) {
  const dispatch = useDispatch();
  const { bun, other } = useSelector(getBurgerConstructor);

  const openIngredient = () => {
    dispatch({
      type: OPEN_INGREDIENT,
      ingredient: ingredient,
    });
  }

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: { ingredient },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  const counter = React.useMemo(() => {
    if (ingredient._id === bun._id) {
      return 1
    } else {
      return other.reduce((counter, item) => {
        return item._id === ingredient._id ? counter += 1 : counter;
      }, 0)
    }
  }, [bun, other, ingredient]);

  return (
    <div className={styles.card} style={{opacity}} ref={dragRef} onClick={() => openIngredient(ingredient) }>
      {counter !== 0 && <Counter count={counter} size='default' />}
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={`${styles.price} pt-2 pb-2`}>
        <p className='text text_type_digits-default pr-2'>{ingredient.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={`${styles.name} text text_type_main-default`}>{ingredient.name}</p>
    </div>
  )
}

Card.propTypes = {
  ingredient: dataPropTypes.isRequired,
}

export default Card;