import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import {getIngredients} from '../../utils/api';
import {IngredientsContext} from '../../utils/context';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getIngredients()
      .then((data) => setData(data.data))
      .catch((eror) => console.log(`Ошибка ${eror}`))
  },[])

  return (
    <IngredientsContext.Provider value={{data, setData}}>
      <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </div>
    </IngredientsContext.Provider>
  );
}

export default App;
