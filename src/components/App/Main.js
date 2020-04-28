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
      wrong: false,
      help: false,
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
    }
  }

  initializeCamera = () => {
    // initialize the camera
    this.canvasElement = document.createElement('canvas');
    this.webcam = new Webcam(
      document.querySelector('.cameracontainer__cameravideo'),
      this.canvasElement
    );
    this.webcam.setup().catch(() => {
      alert(
        'Error getting access to your camera, open browser in a standalone window'
      );
    });
  };

  runModel = async () => {
    const modelurl = process.env.PUBLIC_URL + '/model/model.json';
    const model = await automl.loadImageClassification(modelurl);
    const image = document.querySelector('.cameracontainer__capturedimage');
    let predictions = await model.classify(image);

    predictions.sort((a, b) =>
      a.prob > b.prob ? -1 : b.prob > a.prob ? 1 : 0
    );
    let mostLikely = `IT'S ${predictions[0].label.toUpperCase()}`;

    console.log(predictions);

    if (predictions[0].prob < 0.1) {
      mostLikely = "KERBIT'S NOT SURE!";
    }

    switch (mostLikely) {
      case "IT'S CHAIR":
      case "IT'S SWIVELCHAIR":
      case "IT'S SOFA":
      case "IT'S TABLE":
      case "IT'S BED":
        mostLikely = "IT'S FURNITURE";
        break;
      case "IT'S MIRCOWAVE":
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
        mostLikely = `IT'S ${predictions[0].label.toUpperCase()}`;;
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
    });
    this.runModel();
  };

  discardImage = () => {
    this.setState({
      captured: false,
      capturedImage: null,
      prediction: '',
      help: false,
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
    });
  };

  render() {
    const { captured, prediction } = this.state;
    return (
      <>
        <AppBar discardImage={this.discardImage}></AppBar>
        <Camera
          capturedImage={this.state.capturedImage}
          initializeCamera={this.initializeCamera}
          captured={this.state.captured}
        />
        {captured && !prediction ? <LoadSpinner /> : <></>}

        <ControlBar
          captureImage={this.captureImage}
          prediction={this.state.prediction}
          discardImage={this.discardImage}
          sharePredication={this.sharePredication}
          showForm={this.showForm}
          disableOnForm={this.state.wrong}
          displayHelp={this.displayHelp}
          help={this.state.help}
        ></ControlBar>
      </>
    );
  }
}

export default Main;
