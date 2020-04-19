import React from 'react';

// Components
import MapContainer from './MapContainer';
import CameraButtonContainer from '../App/CameraButtonContainer';
import ResponceButtonContaner from '../App/ResponceButtonContainer';
import RecycleLocation from './RecycleLocation';
import Recyclable from './Recyclable';

const ExpandedControl = (props) => {
  const { discardImage, sharePredication } = props;

  let displayMap;
  if (
    props.prediction === "IT'S FURNITURE" ||
    props.prediction === "IT'S ELECTRICALS" ||
    props.prediction === "IT'S GLASS" ||
    props.prediction === "IT'S KITCHENWARES" ||
    props.prediction === "IT'S COFFEE-CUPS" ||
    props.prediction === "KERBIT'S NOT SURE!"
  ) {
    displayMap = <MapContainer />;
  }

  let kerbitKnows = (
    <div className='response'>
      <header className='response__prediction'>
        <h2>{props.prediction}</h2>
      </header>
      <>{displayMap}</>
      <Recyclable prediction={props.prediction} />
      <RecycleLocation prediction={props.prediction} />
      <ResponceButtonContaner
        prediction={props.prediction}
        restartClick={discardImage}
        shareClick={sharePredication}
      />
    </div>
  );

  let kerbitDoesntKnow = (
    <div className='response response--unknown'>
      <header className='response__prediction'>
        <h2>{props.prediction}</h2>
      </header>
      <>{displayMap}</>
      <Recyclable prediction={props.prediction} />
      <ResponceButtonContaner
        prediction={props.prediction}
        restartClick={discardImage}
      />
    </div>
  );

  return (
    <section className='controls controls--expanded'>
    <div className='buttoncontroller'>
      <CameraButtonContainer disabled={true}></CameraButtonContainer>
      </div>
      {props.prediction === "KERBIT'S NOT SURE!"
        ? kerbitDoesntKnow
        : kerbitKnows}
    </section>
  );
};

export default ExpandedControl;
