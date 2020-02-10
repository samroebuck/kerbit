import { Grommet } from 'grommet';
import React from "react";
import AppBar from './components/AppBar.js';
import CameraControl from "./components/CameraControl";
import KerbitLogo from './images/applogo.svg';
import Model from './components/Model.js';
import { Webcam } from "./components/Webcam.js";

import './styles/styles.scss'


const theme = {
  global: {
    colors: {
      brand: '#7BB8B3'
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
      captured: false
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
  };

  discardImage = () => {
    this.setState({
      captured: false,
      capturedImage: null
    });
  };

  render() {
    return (
      <Grommet theme={theme} full>
      <AppBar ><img src={KerbitLogo} alt='kerbit logo' /></AppBar>
      <CameraControl
        captureImage={this.captureImage}
        discardImage={this.discardImage}
        capturedImage={this.state.capturedImage}
        initializeCamera={this.initializeCamera}
        captured={this.state.captured}
      />
      <Model {...this.state}/>
      </Grommet>
    );
  }
}

export default App;
