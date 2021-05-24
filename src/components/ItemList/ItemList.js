import React from 'react';
import Item from '../Item/Item';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import styles from './ItemList.module.css'

const ItemList = ({ items, onClickDone }) => (<ul className={styles.item_list}>
  {items.map(item => <li key={item.value} className={styles.item}>
    <FormControlLabel
      control={
        <Checkbox checked={item.isDone}
          value="checkedA"
          color="primary"
          onClick={() => onClickDone(item.id)}
        />
      }
      label=<Item value={item.value} isDone={item.isDone}/>
    />
    <IconButton aria-label="delete">
      <DeleteIcon fontSize="small" />
    </IconButton>
  </li>)}
</ul>);

export default ItemList;