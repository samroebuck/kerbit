import { Grommet } from "grommet";
import React from "react";
import AppBar from "./components/AppBar.js";
import Camera from "./components/Camera";
import KerbitLogo from "./images/applogo.svg";
// import Model from './components/Model.js';
import ControlBar from "./components/ControlBar";
import { Webcam } from "./components/Webcam.js";
import LoadingSpinner from './components/LoadingSpinner'

import * as automl from "@tensorflow/tfjs-automl";

import "./styles/styles.scss";

const theme = {
  global: {
    colors: {
      brand: "#68BAB4"
    },
    font: {
      family: "Roboto Slab",
      size: "18px",
      height: "20px"
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.webcam = null;
    this.state = {
      capturedImage: null,
      captured: false,
      prediction: ""
    };
  }

  initializeCamera = () => {
    // initialize the camera
    this.canvasElement = document.createElement("canvas");
    this.webcam = new Webcam(
      document.querySelector(".cameracontainer__cameravideo"),
      this.canvasElement
    );
    this.webcam.setup().catch(() => {
      alert(
        "Error getting access to your camera, open browser in a standalone window"
      );
    });
  };

  runModel = async () => {
    const modelurl = process.env.PUBLIC_URL + "/model/model.json";
    const model = await automl.loadImageClassification(modelurl);
    const image = document.querySelector(".cameracontainer__capturedimage");
    let predictions = await model.classify(image);
    predictions.sort((a, b) =>
      a.prob > b.prob ? -1 : b.prob > a.prob ? 1 : 0
    );
console.log(predictions)
    let mostLikely;
    if (predictions[0].prop > 0.2) {
    mostLikely = predictions[0].label.toUpperCase();
    } else {
      mostLikely = 'unknown'
    }

    this.setState({
      prediction: mostLikely
    });
  };

  captureImage = async () => {
    const capturedData = this.webcam.takeBase64Photo({
      type: "jpeg",
      quality: 0.8
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
      prediction: ""
    });
  };
  

  render() {
    const { captured, prediction } = this.state;
    return (
      <Grommet theme={theme} full>
        <AppBar>
          <img src={KerbitLogo} alt='kerbit logo' className='logo' />
        </AppBar>
        <Camera
          capturedImage={this.state.capturedImage}
          initializeCamera={this.initializeCamera}
          captured={this.state.captured}
        />
        {/* <LoadingSpinner />  */}
        {captured && !prediction ? <LoadingSpinner /> : <></>}
        <ControlBar
          captureImage={this.captureImage}
          prediction={this.state.prediction}
          discardImage={this.discardImage}
        ></ControlBar>
        {/* <Model {...this.state}/> */}
      </Grommet>
    );
  }
}

export default App;
