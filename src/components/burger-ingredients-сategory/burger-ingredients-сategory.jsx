import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-сategory.module.css';
import Card from '../burger-ingredients-card/burger-ingredients-card';
import { dataPropTypes } from '../../utils/prop-types';

function Сategory({type, data, text, openModal}) {
  const dataType = React.useMemo(() => data.filter((item) => item.type === type),[data]);
  return (
    <div className='pt-10' id={type}>
      <h2 className='text text_type_main-medium'>{text}</h2>
      <div className={`${styles.items} pt-6 pl-4`}>
        {dataType.map((item) => <Card key={item._id} info={item} openModal={openModal} />)}
      </div>
    </div>
  )
}

Сategory.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  text: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default Сategory;