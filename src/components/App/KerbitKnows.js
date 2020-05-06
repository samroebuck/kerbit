import React from 'react';
// import InfoBoxContainer from '../Web/InfoBoxContainer';
import { Link } from 'react-router-dom';
//images

import Arrow from '../../images/arrow.svg'

import Paper from '../../images/paper.svg'
import Chair from '../../images/chair.svg'
import Home from '../../images/home.svg'
import Question from '../../images/messagefill.svg'




const KerbitKnows = props => {

  return (
    <>
    <div className={`knows knows--expanded${props.expandedKnows}`}>
      <h1 className='knows__title'>KERBIT KNOWS</h1>
      <button className='knows__btn' onClick={props.handleAccordian}>
      <img src={Arrow} alt='find icon' className='btn__image'/>
      </button>
      <p>Materials like glass, metal, plastic, fabric and cardboard.</p>
      <img src={Paper} alt='paper icon' />
      <p>Furniture and small kitchen applicances.</p>

      <img src={Chair} alt='chair icon' />
      <p>Kitchenwares, such as pans and crockery.</p>

      <img src={Home} alt='house icon' />
      <p>Want something adding to Kerbit? Send us a message and let us know!</p>

      <Link to='/Contact'>
        <img src={Question} alt='Message icon' />
      </Link>
    </div>
    </>
  );
};

export default KerbitKnows;
