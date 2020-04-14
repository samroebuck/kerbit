import React from 'react';

// Components
import MapContainer from './MapContainer';
import CameraButtonContainer from '../App/CameraButtonContainer'
import ResponceButtonContaner from '../App/ResponceButtonContainer'
import RecycleLocation from './RecycleLocation'
import Recyclable from './Recyclable'

const ExpandedControl = props => {
  const { discardImage, sharePredication, showForm } = props;

  let displayMap; 
  if (props.prediction === 'FURNITURE' || props.prediction === 'ELECTRICALS'){
    displayMap = <MapContainer />
  };



  return (
    <section className='controls controls--expanded'>
      <CameraButtonContainer disabled={true}>
        </CameraButtonContainer>
      <div className='response'>
        <header className='response__prediction'>
          <h2>{props.prediction}</h2>
        </header>
        <>{displayMap}</>
        <Recyclable prediction={props.prediction} />
        <RecycleLocation prediction={props.prediction} />
        <ResponceButtonContaner prediction={props.prediction} restartClick={discardImage}  shareClick={sharePredication} formClick={showForm}/>
      </div>
    </section>
  );
};

export default ExpandedControl;
