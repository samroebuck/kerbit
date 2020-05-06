import React from 'react';

// Components
import MapContainer from './MapContainer';
import CameraButtonContainer from '../App/CameraButtonContainer';
import ResponceButtonContaner from '../App/ResponceButtonContainer';
import RecycleLocation from './RecycleLocation';
import Recyclable from './Recyclable';

const ExpandedControl = (props) => {
  const { discardImage, sharePredication, displayHelp } = props;

  let displayMap;
  if (
    props.prediction === "IT'S FURNITURE" ||
    props.prediction === "IT'S ELECTRICALS" ||
    props.prediction === "IT'S GLASS" ||
    props.prediction === "IT'S KITCHENWARES" ||
    props.prediction === "IT'S COFFEE-CUPS" ||
    props.prediction === "IT'S TEXTILES" ||

    props.prediction === "KERBIT'S NOT SURE!"
  ) {
    displayMap = <MapContainer />;
  }

  return (
    <>
      <div className='buttoncontroller'>
        <CameraButtonContainer displayHelp={displayHelp} disabled={true} disabledRes={true}></CameraButtonContainer>
      </div>
      <div
        className={`response ${
          props.prediction === "KERBIT'S NOT SURE!" ? 'response--unknown' : ''
        }`}
      >
        <header className='response__prediction'>
          <h2>{props.prediction}</h2>
        </header>
        <>{displayMap}</>
        <Recyclable prediction={props.prediction} />
        {props.prediction !== "KERBIT'S NOT SURE!" ? (
          <RecycleLocation prediction={props.prediction} />
        ) : (
          ''
        )}
        <ResponceButtonContaner
          prediction={props.prediction}
          restartClick={discardImage}
          shareClick={` ${
          props.prediction !== "KERBIT'S NOT SURE!" ? sharePredication : ''
        }`}
        />
      </div>
    </>
  );
};

export default ExpandedControl;
