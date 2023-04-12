import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-сategory.module.css';
import Card from '../burger-ingredients-card/burger-ingredients-card';
import { getBurgerIngredients } from '../../services/reducers';

function Сategory({type, text, componentRef}) {
  const { ingredients: data } = useSelector(getBurgerIngredients);
  const dataType = React.useMemo(() => data.filter((item) => item.type === type),[data,type]);
  
  return (
    <div ref={componentRef} className='pt-10' id={type}>
      <h2 className='text text_type_main-medium'>{text}</h2>
      <div className={`${styles.items} pt-6 pl-4`}>
        {dataType.map((ingredient) => <Card key={uuid()} ingredient={ingredient} />)}
      </div>
    </div>
  )
}

Сategory.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  componentRef: PropTypes.func.isRequired,
}

export default Сategory;