import React from 'react';
import { Link } from 'react-router-dom';

const ControlButton = props => {
  let button = '';
  if (props.path) {
    button = (
      <Link to={props.path} className={props.class} disabled={props.disabled}>
        <img src={props.image} alt={props.alt} />
      </Link>
    );
  } else if (props.image) {
    button = (
      <button
        className={props.class}
        onClick={props.click}
        disabled={props.disabled}
      >
        <img src={props.image} alt={props.alt} />
      </button>
    );
  } else {
    button = (
      <button className={props.class} onClick={props.click}>
        {props.text}
      </button>
    );
  }

  return <> {button} </>;
};

export default ControlButton;
