import React from 'react';
import PropTypes from 'prop-types';
import { dataPropTypes } from '../../utils/prop-types';
import { useDispatch } from 'react-redux';
import { useDrop, useDrag } from 'react-dnd';
import styles from './burger-constructor-item.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DELETE_OTHER_INGREDIENT, SWAP_INGREDIENT } from '../../services/actions/burger-constructor';

function BurgerConstructorItem({item, index}) {
  const dispatch = useDispatch();
  const ref = React.useRef(null);

  const onDelete = () => {
    dispatch({
      type: DELETE_OTHER_INGREDIENT,
      other: item,
    });
  };

  const [{ opacity }, drag] = useDrag({
    type: "other",
    item: { index },
    collect: (monitor) => {
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
    },
  });

  const [, drop] = useDrop({
    accept: "other",
    drop(item) {
      dispatch({
        type: SWAP_INGREDIENT,
        dragIndex: item.index,
        dropIndex: index
      });
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} className={`${styles.containerElement} pt-4 pr-2`} style={{ opacity }}>
      <DragIcon type='primary' />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={(() => onDelete(item))}
      />
    </div>
  )
}

BurgerConstructorItem.propTypes = {
  item: dataPropTypes.isRequired,
  index: PropTypes.number.isRequired,
}

export default BurgerConstructorItem;