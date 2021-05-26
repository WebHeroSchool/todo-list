import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
  {value}
</span>);

Item.defaultProps = {
  value: 'Задача не найдена'
};

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
 };

export default Item;