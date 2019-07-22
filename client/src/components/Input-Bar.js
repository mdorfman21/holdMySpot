import React from "react";

function InputBar(props) {
  return (
    <div>
      <input onChange={props.onChange} name={props.name} />
    </div>
  );
}

export default InputBar;
