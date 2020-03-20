import React from 'react';
// import InfoBoxContainer from '../Web/InfoBoxContainer';

//images

import Find from '../../images/find.svg';
import Down from '../../images/download.svg';
import Photo from '../../images/photo.svg'
import Recycle from '../../images/recycle.svg'


const Help = props => {
  return (
    <div className='help'>
      <h1 className='help__title'>HOW TO</h1>
      <img src={Find} alt='find icon' />
      <p>Find an item you want to recycle</p>
      <img src={Down} alt='find icon' />
      <p>Put the item down in a clear uncluttered location</p>
      <img src={Photo} alt='find icon' />
      <p>Snap a clear photo of your item</p>
      <img src={Recycle} alt='find icon' />
      <p>Kerbit will let you know if you can recycle it</p>
    </div>
  );
};

export default Help;