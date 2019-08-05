import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} name={props.name} value={props.value}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
