import React from 'react';
import CameraButtonContainer from './CameraButtonContainer'
import Help from './Help'

const CollapseControl = (props) => {
    const { captureImage, disabledOnForm, displayHelp, help } = props;


    const control = help ? (
      <section className='controls controls--expanded'>
      <CameraButtonContainer disabled={disabledOnForm} cameraClick={captureImage} displayHelp={displayHelp}
      >
      </CameraButtonContainer>
      <Help />
      </section>
    ) : (
      <section className='controls'>
      <CameraButtonContainer disabled={disabledOnForm} cameraClick={captureImage} displayHelp={displayHelp}>
      </CameraButtonContainer>
</section>
    );
  return (
    <>{control}</>
  );
}

export default CollapseControl;