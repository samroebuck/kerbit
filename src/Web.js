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
  componentDidMount() {
    document.querySelector('#root').classList.add('webMain');
  }
  render() {
    return (
      <>
        <img src={logo} alt='Kerbit Logo' className='title'></img>
        <div className='positioning'>
        <img src={app} alt='Kerbit running on a mobile device' className='deviceImg'></img>
        <InfoBoxContainer>{this.props.children}</InfoBoxContainer>
        </div>
        <SocialIconContainer>{this.props.children}</SocialIconContainer>
        <div className='download'> <p>DOWNLOAD ON A SUPPORTED <br/> MOBILE DEVICE</p> </div>
        <PWAPrompt 
            delay={2000}
            timesToShow={3}
        />
      </>
    );
  }
}

export default Web;
