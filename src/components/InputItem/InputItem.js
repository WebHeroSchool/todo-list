import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const InputItem = () => (<div className={styles.input}>
  <div className={styles.input_wrap}>
  <TextField
    id="outlined-dense"
    label="Новое дело"
    margin="dense"
    variant="outlined"
    className={styles.input_field}
  />
  </div>
  <Button variant="contained" color="primary" className={styles.button}>
    <strong>Add</strong>
  </Button>
</div>);

export default InputItem;