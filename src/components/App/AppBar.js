import React from "react";
// images
import KerbitLogo from "../../images/logo-refined-spacing.svg";

const AppBar = () => (
  <header className='appbar'>
    <img src={KerbitLogo} alt='kerbit logo' className='appbar__logo' />
  </header>
);

export default AppBar

