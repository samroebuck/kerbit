import React from 'react';
import { Link } from 'react-router-dom';

const ControlButton = (props) => {
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
  } else if (props.href) {
    button = (
      <a
        className={props.class}
        onClick={props.click}
        href={props.href}
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.text}
      </a>
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
