import React from 'react';
import CameraButtonContainer from './CameraButtonContainer';
import Help from './Help';
import KerbitKnows from './KerbitKnows';

class CollapseControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedHowTo: true,
      expandedKnows: false,
      orientation: true,
    };
  }

  componentDidMount() {
    if (window.innerWidth < window.innerHeight) {
      this.setState({
        expandedHowTo: true,
        expandedKnows: false,
        orientation: true,
      });
    } else {
      this.setState({
        orientation: false,
        expandedHowTo: true,
        expandedKnows: true,
      });
    }

    let visited = localStorage['alreadyVisited'];
    if (visited) {
      this.setState({ expandedHowTo: true });
    } else {
      this.setState({ expandedHowTo: false });
      localStorage['alreadyVisited'] = true;
    }

    this.handleOrient();
  }

  handleOrient = () => {
    var self = this;
    if ('onorientationchange' in window) {
      window.addEventListener(
        'orientationchange',
        function () {
          self.setState({
            orientation: !self.state.orientation,
          });
          if (self.state.orientation === false) {
            self.setState({ expandedHowTo: true, expandedKnows: true });
          } else {
            self.setState({ expandedHowTo: false, expandedKnows: false });
          }
        },
        false
      );
    }
  };

  handleAccordian = (e) => {
    let element =
      e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
    if (element.classList.contains('help__btn')) {
      this.setState({
        expandedHowTo: !this.state.expandedHowTo,
        expandedKnows:
          window.screen.width > window.screen.height
            ? this.state.expandedHowTo
            : false,
      });
    }
    if (element.classList.contains('knows__btn')) {
      this.setState({
        expandedKnows: !this.state.expandedKnows,
        expandedHowTo:
          window.screen.width > window.screen.height
            ? this.state.expandedKnows
            : false,
      });
    }
  };

  render() {
    const { captureImage, disabled, displayHelp, help } = this.props;

    return (
      <>
        <div className='buttoncontroller'>
          <CameraButtonContainer
            disabled={disabled}
            cameraClick={captureImage}
            displayHelp={displayHelp}
            help={help}
          ></CameraButtonContainer>
        </div>
        {help ? (
          <>
            <Help
              expandedHowTo={this.state.expandedHowTo}
              handleAccordian={this.handleAccordian}
            />
            <KerbitKnows
              expandedKnows={this.state.expandedKnows}
              handleAccordian={this.handleAccordian}
            />
          </>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default CollapseControl;
