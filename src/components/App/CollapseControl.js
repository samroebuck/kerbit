import React from 'react';
import CameraButtonContainer from './CameraButtonContainer'
import Help from './Help'

const CollapseControl = (props) => {
    const { captureImage, disabledOnForm, displayHelp, help, showForm } = props;


    const control = help ? (
      <section className='controls controls--expanded'>
      <CameraButtonContainer disabled={disabledOnForm} cameraClick={captureImage} displayHelp={displayHelp} showForm={showForm}
      >
      </CameraButtonContainer>
      <Help />
      </section>
    ) : (
      <section className='controls'>
      <CameraButtonContainer disabled={disabledOnForm} cameraClick={captureImage} displayHelp={displayHelp} showForm={showForm}>
      </CameraButtonContainer>
</section>
    );
  return (
    <>{control}</>
  );
}

export default CollapseControl;