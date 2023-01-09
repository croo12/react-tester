import React from "react";
import '../css/Input.scss';

const Input = (props) => {

  return (
    <div
      className={ `input-box 
                   ${props.isValid === false ? 'invalid' : ''}`}
    >
      <input 
        className="input" 
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