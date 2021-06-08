import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';


const Todo = () => {
  const initialState = {
    items: [
      {
        value: "Написать приложение",
        isDone: false,
        id: 1,
      },
      {
        value: "Закончить блок react",
        isDone: false,
        id: 2,
      },
      {
        value: "Выучить английский",
        isDone: false,
        id: 3,
      },
      {
        value: "Приступить к следующему блоку",
        isDone: false,
        id: 4,
      },
    ],
    count: 4,
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect(() => {
    console.log("Update");
  });


  useEffect(() => {
    console.log("mounted");
  }, [count]);

  const onClickDone = (id) => {
    const newItemList = items.map((item) => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  const onClickDelete = (id) => {
    const newItemList = items.filter((item) => item.id !== id);
    setItems(newItemList);
    setCount((count) => count - 1);
  };

  const onClickAdd = (value) => {
    if (value !== "" && !items.some((item) => item.value === value)) {
      setItems([
        ...items,
        {
          value,
          isDone: false,
          id: count + 1,
        },
      ]);
      setCount((count) => count + 1);
    }
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Список дел:</h1>
      <InputItem onClickAdd={onClickAdd} />
      <ItemList
        items={items}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <Footer count={count} />
    </div>
  );
};

export default Todo;