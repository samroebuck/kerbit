import React from 'react';

// Components
import MapContainer from './MapContainer';
import CameraButtonContainer from '../App/CameraButtonContainer'
import ResponceButtonContaner from '../App/ResponceButtonContainer'
import RecycleLocation from './RecycleLocation'
import Recyclable from './Recyclable'

const ExpandedControl = props => {
  const { discardImage, sharePredication, showForm } = props;

  let displayMap = props.prediction === 'FURNITURE' ? <MapContainer /> : '';



  return (
    <section className='controls controls--expanded'>
      <CameraButtonContainer disabled={true}>
        </CameraButtonContainer>
      <div className='response'>
        <header className='response__prediction'>
          <h2> IT 'S... {props.prediction}</h2>
        </header>
        <>{displayMap}</>
        <Recyclable prediction={props.prediction} />
        <RecycleLocation prediction={props.prediction} />
        <ResponceButtonContaner restartClick={discardImage}  shareClick={sharePredication} formClick={showForm}/>
      </div>
    </section>
  );
};

export default ExpandedControl;
