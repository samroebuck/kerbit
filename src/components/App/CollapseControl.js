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
    };
  }

  componentDidMount() {
    let visited = localStorage['alreadyVisited'];
    console.log(visited);
    if (visited) {
      this.setState({ expandedHowTo: true });
    } else {
      this.setState({ expandedHowTo: false });
      localStorage['alreadyVisited'] = true;
    }
  }

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
    const { captureImage, disabledOnForm, displayHelp, help } = this.props;

    return (
      // <section
      //   className={`controls ${
      //     help ? 'controls--expanded controls--expandedls' : ''
      //   }`}
      // >
      <>
      <div className='buttoncontroller'>
        <CameraButtonContainer
          disabled={disabledOnForm}
          cameraClick={captureImage}
          displayHelp={displayHelp}
          help={help}
        ></CameraButtonContainer>
        </div>
          { help ? <>
            <Help
              expandedHowTo={this.state.expandedHowTo}
              handleAccordian={this.handleAccordian}
            />
            <KerbitKnows
              expandedKnows={this.state.expandedKnows}
              handleAccordian={this.handleAccordian}
            />
          </> : ''}
          </>
      // </section>
    );
  }
}

export default CollapseControl;
