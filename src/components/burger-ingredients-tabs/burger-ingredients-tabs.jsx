import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function Tabs({type,bun,sauce,main,buttonHandler}) {
  const [current, setCurrent] = React.useState('sauce');

  return (
    <nav className={`${styles.nav} pt-5`}>
      <Tab className={styles.link} value={type.bun} active={current === type.bun} onClick={() => {setCurrent('bun'); buttonHandler(bun)}}> Булки</Tab>
      <Tab className={styles.link} value={type.sauce} active={current === type.sauce} onClick={() => {setCurrent('sauce'); buttonHandler(sauce)}}>Соусы</Tab>
      <Tab className={styles.link} value={type.main} active={current === type.main} onClick={() => {setCurrent('main'); buttonHandler(main)}}>Начинки</Tab>
    </nav>
  )
}

Tabs.propTypes = {
  type: PropTypes.object.isRequired,
  bun: PropTypes.object.isRequired,
  sauce: PropTypes.object.isRequired,
  main: PropTypes.object.isRequired,
  buttonHandler: PropTypes.func.isRequired,
}

export default Tabs;