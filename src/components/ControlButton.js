import React from 'react';

const ControlButton = props => {
  const button = props.image ? (
    <button className={props.class} onClick={props.click} disabled={props.disabled}>
      <img src={props.image} alt={props.alt} />
    </button>
  ) : (
    <button className={props.class} onClick={props.click}>
      {props.text}
    </button>
  );

  return (
    <> {button} </>
  );
};

export default ControlButton;
