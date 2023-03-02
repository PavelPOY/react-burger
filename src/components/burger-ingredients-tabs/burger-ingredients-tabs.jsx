import React from 'react';
import styles from './burger-ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function Tabs() {
  const [current, setCurrent] = React.useState('bun')
  return (
    <nav className={`${styles.nav} pt-5`}>
      <a href='#bun'><Tab value='bun' active={current === 'bun'} onClick={setCurrent}> Булки</Tab></a>
      <a href='#sauce'><Tab value='sauce' active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab></a>
      <a href='#main'><Tab value='main' active={current === 'main'} onClick={setCurrent}>Начинки</Tab></a>
    </nav>
  )
}

export default Tabs;