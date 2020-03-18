import React from 'react';

import ControlButton from './ControlButton';

import CameraButton from '../../images/camerabutton.svg';
import HelpButton from '../../images/collapse.svg';
import FlashButton from '../../images/flash.svg';

const ControlButtonContainer = props => {
    const buttons = [
        {
          id: 1,
          image: HelpButton,
          alt: 'help button',
          class: 'controls__helpbtn'
        },
        {
          id: 2,
          image: CameraButton,
          alt: 'camera shutter button',
          class: 'controls__capturebtn',
          click: props.click
        },
        {
          id: 3,
          image: FlashButton,
          alt: 'flash button',
          class: 'controls__flashbtn',
        }
      ];

      
  const content = buttons.map(button => (
    <ControlButton
      key={button.id}
      image={button.image}
      alt={button.alt}
      click={button.click}
      disabled={props.disabled}
      class={button.class}
    />
  ));
  return <>{ content }</>;
};



export default ControlButtonContainer;
