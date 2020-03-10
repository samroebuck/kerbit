import React from 'react';
import ControlButton from '../components/ControlButton';
import CameraButton from '../images/camerabutton.svg';
import HelpButton from '../images/collapse.svg'
import FlashButton from '../images/flash.svg'

const CollapseControl = (props) => {
    const { captureImage, disabledOnForm } = props;
  return (
    <section className='controls'>
    <ControlButton
          image={HelpButton}
          alt='help button'
          class='controls__helpbtn'
          disabled={disabledOnForm}
        />
      <ControlButton
          image={CameraButton}
          alt='camera shutter button'
          click={captureImage}
          class='controls__capturebtn'
          disabled={disabledOnForm}
        />
        <ControlButton
          image={FlashButton}
          alt='flash button'
          disabled={disabledOnForm}
          class='controls__flashbtn'
        />
    </section>
  );
}

export default CollapseControl;