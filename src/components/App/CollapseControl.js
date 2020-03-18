import React from 'react';
import CameraButtonContainer from './CameraButtonContainer'

const CollapseControl = (props) => {
    const { captureImage, disabledOnForm } = props;
  return (
    <section className='controls'>
        <CameraButtonContainer disabled={disabledOnForm} click={captureImage}>
        </CameraButtonContainer>
    </section>
  );
}

export default CollapseControl;