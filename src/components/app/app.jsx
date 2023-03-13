import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import {URL} from '../../utils/constant';
import {getIngredients} from '../../utils/api'

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getIngredients(URL)
      .then((data) => setData(data.data))
      .catch((eror) => console.log(`Ошибка ${eror}`))
  },[])

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
