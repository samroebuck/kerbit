import React from 'react';
// import InfoBoxContainer from '../Web/InfoBoxContainer';

//images

import Arrow from '../../images/arrow.svg';

// import Find from '../../images/find.svg';
// import Down from '../../images/download.svg';
// import Photo from '../../images/photo.svg';
// import Recycle from '../../images/recycle.svg';

const Help = props => {

  return (
    <>
      <div className={`help help--expanded${props.expandedHowTo}`}>
        <h1 className='help__title'>HOW TO</h1>
        <button className='help__btn' onClick={props.handleAccordian}>
          <img src={Arrow} alt='open arrow' className='btn__image' />
        </button>
        {/* <img src={Find} alt='find icon' />
         */}
         <p className='help__step'>1.</p>
        <p>Get an item you want to know how to recycle</p>
        {/* <img src={Down} alt='find icon' />
         */}
         <p className='help__step'>2.</p>
        <p>Put the item down in a clear uncluttered location</p>
        {/* <img src={Photo} alt='find icon' /> */}
        <p className='help__step'>3.</p>
        <p>Snap a clear photo of your item</p>
        {/* <img src={Recycle} alt='find icon' /> */}
        <p className='help__step'>4.</p>
        <p>Kerbit will let you know if you can recycle it in Leeds</p>
      </div>
    </>
  );
};

export default Help;
