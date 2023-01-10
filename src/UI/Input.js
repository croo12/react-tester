import React from "react";
import styles from '../css/Input.module.scss';

const Input = (props) => {

  console.log(styles);

  return (
    <div
      className={ styles.inputBox + " " +
                  `${props.isValid === false ? 'invalid' : ''}`}
    >
      <input 
        className={styles.input}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder} 
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export default Input;