import React from "react";

const Wrapper = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Wrapper;
