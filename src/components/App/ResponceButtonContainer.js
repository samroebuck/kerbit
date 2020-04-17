import React from 'react';

import ControlButton from './ControlButton';

import RestartIcon from '../../images/restart-icon.svg';
import ShareButtton from '../../images/share.svg';

const ControlButtonContainer = (props) => {
  let prediction = props.prediction.toLowerCase();
  let predictionCut = prediction.slice(5);
  let predictionCutSearch;
  if (predictionCut === 'electricals') {
    predictionCutSearch = 'electrical'
  } else {
    predictionCutSearch = predictionCut
  }

  let buttons;

  if (prediction === "kerbit's not sure!") {
    buttons = [
      {
        id: 1,
        image: RestartIcon,
        alt: 'restart icon',
        class: 'response__btn response__btn--bottomfirst',
        click: props.restartClick,
      },
      {
        id: 3,
        class: 'response__btn response__btn--bottomthird',
        href: `https://www.leeds.gov.uk/residents/bins-and-recycling/a-to-z-of-reusing-recycling-and-waste-disposal`,
        text: [`Check out the Leeds.gov website for more info!!`],
      },
    ];
  } else {
    buttons = [
      {
        id: 1,
        image: RestartIcon,
        alt: 'restart icon',
        class: 'response__btn response__btn--bottomfirst',
        click: props.restartClick,
      },
      {
        id: 2,
        image: ShareButtton,
        alt: 'share icon',
        class: 'response__btn response__btn--bottomsecond',
        click: props.shareClick,
      },
      {
        id: 3,
        class: 'response__btn response__btn--bottomthird',
        href: `https://www.leeds.gov.uk/residents/bins-and-recycling/a-to-z-of-reusing-recycling-and-waste-disposal?k=%27${predictionCutSearch}%27`,
        text: [`Find out more about recycling ${predictionCut}!`],
      },
    ];
  }

  const content = buttons.map((button) => (
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
  return <>{content}</>;
};

export default ControlButtonContainer;
