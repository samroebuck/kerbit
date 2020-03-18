import React from 'react';

const Recyclable = props => {

    let isItRecyclable =
    props.prediction !== 'BATTERIES' || props.prediction !== 'TRASH' ? (
      <p>
        HELL YEAH, IT'S <br></br> <span>RECYCLABLE</span>
      </p>
    ) : (
      <p>
        OH NO, IT'S <br></br> <span>NOT RECYCLABLE</span>
      </p>
    ); 

    return (
        <div className='response__recyclable'>{isItRecyclable}</div>
    );
};

export default Recyclable;