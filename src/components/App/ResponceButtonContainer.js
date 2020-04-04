import React from 'react';

import ControlButton from './ControlButton';

import RestartIcon from '../../images/restart-icon.svg';
import ShareButtton from '../../images/share.svg';


const ControlButtonContainer = props => {
    let prediction = props.prediction.toLowerCase(); 
    if (prediction === 'electicals') {
      prediction = 'electrical'
    }
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
          class: 'response__btn response__btn--bottomthird',
          href: `https://www.leeds.gov.uk/residents/bins-and-recycling/a-to-z-of-reusing-recycling-and-waste-disposal?k=%27${props.prediction}%27`,
          text: [
            `Find out more about recycling ${prediction}!`
          ]
        }
      ];

      
  const content = buttons.map(button => (
    <ControlButton
      key={button.id}
      href={button.href}
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
