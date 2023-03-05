import React from 'react';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Link from '../app-header-link/app-header-link';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} pt-4 pb-4`}>

        <div className={styles.container}>
          <Link 
            indent={true}
            image={<BurgerIcon type='primary' />}
            active={true}
            text={'Конструктор'}
          />
          <Link 
            indent={true}
            image={<ListIcon type='secondary' />}
            active={false}
            text={'Лента заказов'}
          />
        </div>

        <div className={styles.container}>
        <Logo />
        </div> 

        <div className={styles.container}>
          <Link 
            indent={false}
            image={<ProfileIcon type='secondary' />}
            active={false}
            text={'Личный кабинет'}
          />
        </div>

      </nav>
    </header>
  );
}

export default AppHeader;