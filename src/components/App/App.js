import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    const items = [
      {
        value : 'Написать приложение',
        isDone: true
      },
      {
        value : 'Закончить блок react',
        isDone: false
      },
      {
        value : 'Выучить английский',
        isDone: false
      },
      {
        value : 'Приступить к следующему блоку',
        isDone: false
      }
    ];

    const count =  items.filter(item => item.isDone === false);

    return(
      <div className={styles.wrap}>
        <h1>Список дел:</h1>
        <InputItem />
        <ItemList items={items}/>
        <Footer count={count.length} />
      </div>
    );
  }
};

export default App;
