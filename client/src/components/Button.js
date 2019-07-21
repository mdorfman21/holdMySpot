import React from 'react';

function Button(props) {
  return(
    <div>
      <button onClick={props.onClick} name={props.name}>
      {props.name}
      </button>
    </div>
  );
}

export default Button;