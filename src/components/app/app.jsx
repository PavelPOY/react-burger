import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  const [data, setData] = React.useState([]);
  const URL = 'https://norma.nomoreparties.space/api/ingredients';

  React.useEffect(() => {
    const getIngredients = () => {
      return fetch (URL)
        .then(res => {
          if(res.ok) {
            return res.json();
          } else {
            return Promise.reject(res.status);
          }
        })
    }
    getIngredients()
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
