import React from 'react';

const Recyclable = props => {

    let isItRecyclable =
    props.prediction !== 'KERBIT\'S NOT SURE!' ? (
      <p>
        HELL YEAH, IT'S <br></br> <span>RECYCLABLE</span>
      </p>
    ) : (
      <p>
        <span>OH NO!</span> <br></br> Try again or take the item to a recycling centre
      </p>
    ); 

    return (
        <div className='response__recyclable'>{isItRecyclable}</div>
    );
};

export default Recyclable;