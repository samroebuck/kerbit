// react
import React from 'react';

//components
import AppBar from './AppBar';
import Camera from './Camera';
import ControlBar from './ControlBar';
import { Webcam } from './Webcam.js';

// libraries
import * as automl from '@tensorflow/tfjs-automl';
import Loadable from 'react-loadable';

// styles
import '../../styles/appStyles.scss';

// code splitting

const Loading = () => <h1>Loading...</h1>; // loading component

const LoadSpinner = Loadable({
  loader: () => import('./LoadingSpinner'),
  loading: Loading,
});

// component

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.webcam = null;
    this.state = {
      capturedImage: null,
      captured: false,
      prediction: '',
      disabled: false,
      help: false,
      cameraAccess: '',
    };
  }

  componentDidMount() {
    document.querySelector('#root').classList.add('appMain');
    let visited = localStorage['alreadyVisited'];
    if (visited) {
      this.setState({ help: false });
    } else {
      this.setState({ help: true });

      localStorage['alreadyVisited'] = true;
      // localStorage.clear()
    }

  }

  initializeCamera = () => {
    this.canvasElement = document.createElement('canvas');
    this.access = this.state.cameraAccess
    this.webcam = new Webcam(
      document.querySelector('.cameracontainer__cameravideo'),
      this.canvasElement,
      this.access,
    );

    this.webcam.setup().catch(() => {
      this.setState({
        cameraAccess: 'Unable to access your camera! Please approve camera access to use Kerbit!',
        disabled: true,
    });
  });
}

  runModel = async () => {
    const modelurl = process.env.PUBLIC_URL + '/model/model.json';
    const model = await automl.loadImageClassification(modelurl);
    const image = document.querySelector('.cameracontainer__capturedimage');
    let predictions = await model.classify(image);

    predictions.sort((a, b) =>
      a.prob > b.prob ? -1 : b.prob > a.prob ? 1 : 0
    );
    let mostLikely = `IT'S ${predictions[0].label.toUpperCase()}`;

    switch (mostLikely) {
      case "IT'S CHAIR":
      case "IT'S SWIVELCHAIR":
      case "IT'S SOFA":
      case "IT'S TABLE":
      case "IT'S BED":
        mostLikely = "IT'S FURNITURE";
        break;
      case "IT'S MICROWAVE":
      case "IT'S KETTLE":
      case "IT'S TOASTER":
        mostLikely = "IT'S ELECTRICALS";
        break;
      case "IT'S CROCKERY":
      case "IT'S CUPS":
      case "IT'S CUTLERY":
      case "IT'S PANS":
        mostLikely = "IT'S KITCHENWARES";
        break;
      default:
        mostLikely = `IT'S ${predictions[0].label.toUpperCase()}`;
    }

    if (predictions[0].prob < 0.3) {
      mostLikely = "KERBIT'S NOT SURE!";
    }

    this.setState({
      prediction: mostLikely,
    });
  };

  captureImage = async () => {
    const capturedData = this.webcam.takeBase64Photo({
      type: 'jpeg',
      quality: 0.8,
    });

    this.setState({
      captured: true,
      capturedImage: capturedData.base64,
      disabled: true,
    });
    this.runModel();
  };

  discardImage = () => {
    this.setState({
      captured: false,
      capturedImage: null,
      prediction: '',
      help: false,
      disabled: false,
    });
  };

  sharePredication = async () => {
    let predict = this.state.prediction.toLowerCase();
    const shareData = {
      title: `Kerbit`,
      text: `I just recycled some ${predict}s with Kerbit! You can too!`,
      url: 'https://kerbit.app/',
    };

    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log('Error');
    }
  };

  displayHelp = () => {
    this.setState({
      help: !this.state.help,
      disabled: !this.state.disabled,
    });
    if (this.state.cameraAccess !== '') {
      this.setState({
        disabled: true,
      });
    }
  };



  render() {
    const { captured, prediction, cameraAccess } = this.state;
    return (
      <>
        <AppBar discardImage={this.discardImage}></AppBar>
        <Camera
          capturedImage={this.state.capturedImage}
          initializeCamera={this.initializeCamera}
          captured={this.state.captured}
        />
        {captured && !prediction ? <LoadSpinner /> : <></>}
        
        {cameraAccess ? <p className='cameraerror'>{cameraAccess}</p> : <></>}
        <ControlBar
          captureImage={this.captureImage}
          prediction={this.state.prediction}
          discardImage={this.discardImage}
          sharePredication={this.sharePredication}
          disabled={this.state.disabled}
          displayHelp={this.displayHelp}
          help={this.state.help}
        ></ControlBar>
      </>
    );
  }
}

export default Main;
