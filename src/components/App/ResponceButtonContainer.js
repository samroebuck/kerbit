import React from 'react';

import ControlButton from './ControlButton';

import RestartIcon from '../../images/restart-icon.svg';
import ShareButtton from '../../images/share.svg';
import KerbitLogo from '../../images/logo-refined-spacing.svg';


const ControlButtonContainer = props => {
    const buttons = [
        {
          id: 1,
          image: RestartIcon,
          alt: 'restart icon',
          class: 'response__btn response__btn--bottomfirst',
          click: props.restartClick
        },
        {
          id: 2,
          image: ShareButtton,
          alt: 'share icon',
          class: 'response__btn response__btn--bottomsecond',
          click: props.shareClick
        },
        {
          id: 3,
          image: '',
          alt: 'flash button',
          class: 'response__btn response__btn--bottomthird',
          click: props.formClick,
          text: [
            'Did ',
            <img src={KerbitLogo} alt='kerbit logo' key='1' />,
            ' get something wrong?'
          ]
        }
      ];

      
  const content = buttons.map(button => (
    <ControlButton
      key={button.id}
      image={button.image}
      alt={button.alt}
      click={button.click}
      class={button.class}
      text={button.text}
    />
  ));
  return <>{ content }</>;
};



export default ControlButtonContainer;
