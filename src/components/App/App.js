import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Написать приложение',
        isDone: true
      },
      {
        value: 'Закончить блок react',
        isDone: false
      },
      {
        value: 'Выучить английский',
        isDone: false
      },
      {
        value: 'Приступить к следующему блоку',
        isDone: false
      }
    ]
  };

  onClickDone = (isDone) => console.log(isDone);

  render() {
    const count = this.state.items.filter(item => item.isDone === false);

    return (
      <div className={styles.wrap}>
        <h1>Список дел:</h1>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={count.length} />
      </div>
    );
  }
};
export default App;