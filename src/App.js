// react
import React from 'react';

//components
import AppBar from './components/App/AppBar';
import Camera from './components/App/Camera';
import ControlBar from './components/App/ControlBar';
import { Webcam } from './components/App/Webcam.js';

// libraries
import * as automl from '@tensorflow/tfjs-automl';
import Loadable from 'react-loadable';

// styles
import './styles/appStyles.scss';

// code splitting

const Loading = () => <h1>Loading...</h1>; // loading component

const LoadForm = Loadable({
  loader: () => import('./components/App/FixForm'),
  loading: Loading
});

const LoadSpinner = Loadable({
  loader: () => import('./components/App/LoadingSpinner'),
  loading: Loading
});

// component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.webcam = null;
    this.state = {
      capturedImage: null,
      captured: false,
      prediction: '',
      wrong: false
    };
  }

  componentDidMount() {
    document.querySelector('#root').classList.add('appMain');
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

    let mostLikely = predictions[0].label.toUpperCase();

    if (
      mostLikely === 'CHAIR' ||
      mostLikely === 'SWIVELCHAIR' ||
      mostLikely === 'SOFA' ||
      mostLikely === 'TABLE' ||
      mostLikely === 'BED'
    ) {
      mostLikely = 'FURNITURE';
    }

    this.setState({
      prediction: mostLikely
    });
  };

  captureImage = async () => {
    const capturedData = this.webcam.takeBase64Photo({
      type: 'jpeg',
      quality: 0.8
    });

    this.setState({
      captured: true,
      capturedImage: capturedData.base64
    });
    this.runModel();
  };

  discardImage = () => {
    this.setState({
      captured: false,
      capturedImage: null,
      prediction: ''
    });
  };

  sharePredication = async () => {
    let predict = this.state.prediction.toLowerCase();
    const shareData = {
      title: `Kerbit`,
      text: `I just recycled some ${predict}s with Kerbit! You can too!`,
      url: 'https://kerbit.app/',
    }
    
      try {
        await navigator.share(shareData)
        console.log('shared successfully');
      } catch(err) {
        console.log('Error');

      }
 
  }

  showForm = () => {
    this.setState({
      wrong: true,
    });
    this.discardImage();
  }

  render() {
    const { captured, prediction, wrong } = this.state;
    return (
      <>
        <AppBar></AppBar>
        <Camera
          capturedImage={this.state.capturedImage}
          initializeCamera={this.initializeCamera}
          captured={this.state.captured}
        />
        {captured && !prediction ? <LoadSpinner /> : <></>}
        {wrong ? <LoadForm /> : <></>}
        <ControlBar
          captureImage={this.captureImage}
          prediction={this.state.prediction}
          discardImage={this.discardImage}
          sharePredication={this.sharePredication}
          showForm={this.showForm}
          disableOnForm={this.state.wrong}
        ></ControlBar>
      </>
    );
  }
}

export default App;
