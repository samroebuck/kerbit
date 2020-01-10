import React, { Component } from "react";

class CameraControl extends Component {

  componentDidMount() {
    const { initializeCamera } = this.props;
    initializeCamera()
  }
  render() {
    const { captureImage, discardImage, capturedImage, captured } = this.props;
    const imageDisplay = capturedImage ? (
      <img src={capturedImage} alt="captured" width="350" />
    ) : (
      <span />
    );

    const buttons = captured ? (
      <div>
        <button className="deleteButton" onClick={discardImage}>
          {" "}
          Delete Photo{" "}
        </button>
      </div>
    ) : (
      <button className="captureButton" onClick={captureImage}>
        {" "}
        Take Picture{" "}
      </button>
    );

    return (
      <div>
        <video
          autoPlay
          playsInline
          muted
          id="webcam"
          width="100%"
          height="200"
        />
        <br />
        <div className="imageCanvas">{imageDisplay}</div>
        {buttons}
      </div>
    );
  }
}
export default CameraControl;
