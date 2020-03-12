import React from 'react';
import ControlButton from '../components/ControlButton';
import CameraButton from '../images/camerabutton.svg';
import RestartIcon from '../images/restart-icon.svg';
import ShareButtton from '../images/share.svg';
import KerbitLogo from '../images/logo-refined-spacing.svg';
import HelpButton from '../images/collapse.svg';
import FlashButton from '../images/flash.svg';
import MapContainer from '../components/MapContainer';
import RecyclingCentre from '../images/centre.svg';
import Bin from '../images/bin.svg';
import BinGreen from '../images/binGreen.svg';

const ExpandedControl = props => {
  const { discardImage, sharePredication, showForm } = props;

  let displayMap = props.prediction === 'FURNITURE' ? <MapContainer /> : '';

  let isItRecyclable =
    props.prediction !== 'BATTERIES' || props.prediction !== 'TRASH' ? (
      <p>
        HELL YEAH, IT'S <br></br> <span>RECYCLABLE</span>
      </p>
    ) : (
      <p>
        OH NO, IT'S <br></br> <span>NOT RECYCLABLE</span>
      </p>
    );

  let location;
  switch (props.prediction) {
    case 'TRASH':
      location = (
        <>
          <img src={Bin} alt='recycling centre icon'></img>
          <p>Black bin</p>
        </>
      );
      break;
    case 'FURNITURE':
    case 'GLASS':
    case 'KITCHENWARES':
      location = (
        <>
          <img src={RecyclingCentre} alt='recycling centre icon'></img>
          <p>Recycling Centre</p>
        </>
      );
      break;
    default:
      location = (
        <>
          <img src={BinGreen} alt='recycling centre icon'></img>
          <p>Green bin</p>
        </>
      );
  }

  return (
    <section className='controls controls--expanded'>
      <ControlButton
        image={HelpButton}
        alt='help button'
        class='controls__helpbtn'
        disabled={true}
      />
      <ControlButton
        image={CameraButton}
        alt='camera shutter button'
        class='controls__capturebtn controls__capturebtn--disabled'
        disabled={true}
      />
      <ControlButton
        image={FlashButton}
        alt='flash button'
        class='controls__flashbtn'
        disabled={true}
      />
      <div className='response'>
        <header className='response__prediction'>
          <h2> IT 'S... {props.prediction}</h2>
        </header>
        <>{displayMap}</>
        <div className='response__recyclable'>{isItRecyclable}</div>
        <div className='response__location'>{location}</div>

        <ControlButton
          image={RestartIcon}
          alt='restart icon'
          click={discardImage}
          class='response__btn response__btn--bottomfirst'
        />
        <ControlButton
          image={ShareButtton}
          alt='share icon'
          class='response__btn response__btn--bottomsecond'
          click={sharePredication}
        />
        <ControlButton
          class='response__btn response__btn--bottomthird'
          click={showForm}
          text={[
            'Did ',
            <img src={KerbitLogo} alt='kerbit logo' key='1' />,
            ' get something wrong?'
          ]}
        />
      </div>
    </section>
  );
};

export default ExpandedControl;
