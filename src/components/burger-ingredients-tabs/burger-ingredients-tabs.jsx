import React from 'react';
import styles from './burger-ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function Tabs({type}) {
  const [current, setCurrent] = React.useState('bun')
  return (
    <nav className={`${styles.nav} pt-5`}>
      <a className={styles.link} href='#bun'><Tab value={type.bun} active={current === type.bun} onClick={setCurrent}> Булки</Tab></a>
      <a className={styles.link} href='#sauce'><Tab value={type.sauce} active={current === type.sauce} onClick={setCurrent}>Соусы</Tab></a>
      <a className={styles.link} href='#main'><Tab value={type.main} active={current === type.main} onClick={setCurrent}>Начинки</Tab></a>
    </nav>
  )
}

export default Tabs;