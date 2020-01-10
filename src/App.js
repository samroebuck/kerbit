import React from "react";
import "./App.css";
import CameraControl from "./CameraControl";
import { Webcam } from "./Webcam.js";
import Model from './Model.js'

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
      <>
      <CameraControl
        captureImage={this.captureImage}
        discardImage={this.discardImage}
        capturedImage={this.state.capturedImage}
        initializeCamera={this.initializeCamera}
      />
      <Model {...this.state}/>
      </>
    );
  }
}

export default App;
