import React from 'react';

import ControlButton from './ControlButton';

import CameraButton from '../../images/camerabutton.svg';
import HelpButton from '../../images/help.svg';
import FlashButton from '../../images/message.svg';

const ControlButtonContainer = props => {
    const buttons = [
        {
          id: 1,
          image: HelpButton,
          alt: 'help button',
          class: 'controls__helpbtn',
          click: props.displayHelp
        },
        {
          id: 2,
          image: CameraButton,
          alt: 'camera shutter button',
          class: 'controls__capturebtn',
          click: props.cameraClick
        },
        {
          id: 3,
          image: FlashButton,
          alt: 'message button',
          class: 'controls__flashbtn',
          // click: props.showForm
          path: '/Contact'
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
      path={button.path}
    />
  ));
  return <>{ content }</>;
};



export default ControlButtonContainer;
