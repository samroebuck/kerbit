import React from "react";
// images
import KerbitLogo from "../../images/logo-refined-spacing.svg";

const AppBar = (props) => (
  <header className='appbar'>
  <button onClick={props.discardImage}>
    <img src={KerbitLogo} alt='kerbit logo' className='appbar__logo' />
    </button>
  </header>
  
);

export default AppBar

