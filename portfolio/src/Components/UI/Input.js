import './Input.css';
import React from 'react';

const Input = React.forwardRef((props, ref) => {
  // spread props.input object to make key value pairs
  return (
    <div className="input">
      <input placeholder={props.placeholder} ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
