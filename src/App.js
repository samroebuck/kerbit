import { Grommet } from 'grommet';
import React from "react";
import AppBar from './components/AppBar.js';
import Camera from "./components/Camera";
import KerbitLogo from './images/applogo.svg';
// import Model from './components/Model.js';
import ControlBar from './components/ControlBar'
import { Webcam } from "./components/Webcam.js";

import * as automl from "@tensorflow/tfjs-automl";


import './styles/styles.scss'


const theme = {
  global: {
    colors: {
      brand: '#68BAB4'
    },
    font: {
      family: 'Roboto Slab',
      size: '18px',
      height: '20px'
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.webcam = null;
    this.state = {
      capturedImage: null,
      captured: false,
      prediction: ''
    };
  }

  

  initializeCamera = () => {
    // initialize the camera
    this.canvasElement = document.createElement("canvas");
    this.webcam = new Webcam(
      document.getElementById("webcam"),
      this.canvasElement
    );
    this.webcam.setup().catch(() => {
      alert(
        "Error getting access to your camera, open browser in a standalone window"
      );
    });
  }

  runModel = async () => {
    const modelurl = process.env.PUBLIC_URL + "/model/model.json";
    const model = await automl.loadImageClassification(modelurl);
    const image = document.querySelector(".generatedImage");
    let predictions = await model.classify(image);
    predictions.sort((a,b) => (a.prob > b.prob) ? -1 : ((b.prob > a.prob) ? 1 : 0));
    let mostLikely = predictions[0].label;

    this.setState({
      prediction: mostLikely
    });
  } 

  captureImage = async () => {
    const capturedData = this.webcam.takeBase64Photo({
      type: "jpeg",
      quality: 0.8
    });
    // console.log(capturedData);
    this.setState({
      captured: true,
      capturedImage: capturedData.base64
    });
    this.runModel();
  };


  // discardImage = () => {
  //   this.setState({
  //     captured: false,
  //     capturedImage: null
  //   });
  // };

  render() {
    return (
      <Grommet theme={theme} full>
      <AppBar ><img src={KerbitLogo} alt='kerbit logo' className='logo'/></AppBar>
      <Camera
        // discardImage={this.discardImage}
        capturedImage={this.state.capturedImage}
        initializeCamera={this.initializeCamera}
        captured={this.state.captured}
      />
      <ControlBar captureImage={this.captureImage} prediction={this.state.prediction}
>
      </ControlBar>
      {/* <Model {...this.state}/> */}

      </Grommet>
    );
  }
}

export default App;
