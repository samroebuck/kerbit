import React from 'react';
// styles
import './styles/webStyles.scss';
//components
import InfoBoxContainer from './components/Web/InfoBoxContainer';
import SocialIconContainer from './components/Web/SocialIconContainer'
import PWAPrompt from 'react-ios-pwa-prompt'
//images
import logo from './images/logo-refined-spacing.svg';
import app from './images/mockup-forweb.svg';

class Web extends React.Component {
  render() {
    return (
      <>
        <img src={logo} alt='Kerbit Logo' className='title'></img>
        <div className='positioning'>
        <img src={app} alt='Kerbit running on a mobile device' className='deviceImg'></img>
        <InfoBoxContainer>{this.props.children}</InfoBoxContainer>
        </div>
        <SocialIconContainer>{this.props.children}</SocialIconContainer>
        <PWAPrompt 
            delay={0}
            debug={true}
        />
      </>
    );
  }
}

export default Web;
