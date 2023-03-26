import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-сategory.module.css';
import Card from '../burger-ingredients-card/burger-ingredients-card';
import { IngredientsContext } from '../../utils/context';

function Сategory({type, text, ingredient, componentRef}) {
  const {data} = React.useContext(IngredientsContext);
  const dataType = React.useMemo(() => data.filter((item) => item.type === type),[data]);
  return (
    <div ref={componentRef} className='pt-10' id={type}>
      <h2 className='text text_type_main-medium'>{text}</h2>
      <div className={`${styles.items} pt-6 pl-4`}>
        {dataType.map((item) => <Card key={item._id} info={item} ingredient={ingredient} />)}
      </div>
    </div>
  )
}

Сategory.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  ingredient: PropTypes.func.isRequired,
  componentRef: PropTypes.object.isRequired,
}

export default Сategory;