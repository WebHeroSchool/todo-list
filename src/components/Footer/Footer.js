import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<footer className={styles.wrap}>
  <div><span className={styles.item_count}>Осталось дел: {count}</span></div>
  <div className={styles.button_group}>    
    <button className={styles.button}>Все</button>
    <button className={styles.button}>Активные</button>
    <button className={styles.button}>Bыполненные</button>
  </div>
  <div>
    <button className={styles.button}>Удалить выполненные</button>
  </div>
</footer>);

export default Footer;