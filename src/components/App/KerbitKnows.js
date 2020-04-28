import React from 'react';
// import InfoBoxContainer from '../Web/InfoBoxContainer';

//images

import Arrow from '../../images/arrow.svg'

import Paper from '../../images/paper.svg'
import Chair from '../../images/chair.svg'
import Home from '../../images/home.svg'
import Question from '../../images/question.svg'




const KerbitKnows = props => {

  return (
    <>
    <div className={`knows knows--expanded${props.expandedKnows}`}>
      <h1 className='knows__title'>KERBIT KNOWS</h1>
      <button className='knows__btn' onClick={props.handleAccordian}>
      <img src={Arrow} alt='find icon' className='btn__image'/>
      </button>
      <p>Materials like glass, metal, plastic, fabric and cardboard.</p>
      <img src={Paper} alt='find icon' />
      <p>Furniture and small kitchen applicances.</p>

      <img src={Chair} alt='find icon' />
      <p>Kitchenwares, such as pans and crockery.</p>

      <img src={Home} alt='find icon' />
      <p>Want something adding to Kerbit? Send us a message and let us know!</p>

      <img src={Question} alt='find icon' />
    </div>
    </>
  );
};

export default KerbitKnows;
