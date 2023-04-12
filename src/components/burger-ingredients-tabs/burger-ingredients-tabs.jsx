import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function Tabs({type,bun,sauce,main}) {
  const [current, setCurrent] = React.useState('bun');

  React.useEffect(() => {
    if (bun) {
      setCurrent('bun')
    } else if (sauce) {
      setCurrent('sauce')
    } else {
      setCurrent('main')
    }
  }, [bun, sauce, main ]);

  const buttonHandler = (tab) => {
    setCurrent(tab);
    const tabElement = document.getElementById(tab);
    tabElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} pt-5`}>
      <Tab className={styles.link} value={type.bun} active={current === type.bun} onClick={() => {buttonHandler('bun')}}> Булки</Tab>
      <Tab className={styles.link} value={type.sauce} active={current === type.sauce} onClick={() => {buttonHandler('sauce')}}>Соусы</Tab>
      <Tab className={styles.link} value={type.main} active={current === type.main} onClick={() => {buttonHandler('main')}}>Начинки</Tab>
    </nav>
  )
}

Tabs.propTypes = {
  type: PropTypes.object.isRequired,
  bun: PropTypes.bool.isRequired,
  sauce: PropTypes.bool.isRequired
}

export default Tabs;