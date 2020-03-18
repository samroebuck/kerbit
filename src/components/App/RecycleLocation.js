import React from 'react';

import RecyclingCentre from '../../images/centre.svg';
import Bin from '../../images/bin.svg';
import BinGreen from '../../images/binGreen.svg';

const RecycleLocation = props => {
    let location;
    switch (props.prediction) {
      case 'TRASH':
        location = (
          <>
            <img src={Bin} alt='recycling centre icon'></img>
            <p>Black bin</p>
          </>
        );
        break;
      case 'FURNITURE':
      case 'GLASS':
      case 'KITCHENWARES':
        location = (
          <>
            <img src={RecyclingCentre} alt='recycling centre icon'></img>
            <p>Recycling Centre</p>
          </>
        );
        break;
      default:
        location = (
          <>
            <img src={BinGreen} alt='recycling centre icon'></img>
            <p>Green bin</p>
          </>
        );
    }

    return (
        <div className='response__location'>{location}</div>
    );
};

export default RecycleLocation;