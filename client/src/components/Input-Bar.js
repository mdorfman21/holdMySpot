import React from 'react';

function InputBar(props) {
  return(
    <div>
      <input onChange={props.onChange} name={props.name}></input>
    </div>
  )
}

export default InputBar;