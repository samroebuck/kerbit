import React, { Component } from "react";

class CameraControl extends Component {
  componentDidMount() {
    const { initializeCamera } = this.props;
    initializeCamera()
  }
  render() {
    const { captureImage, discardImage, capturedImage, captured } = this.props;
    const imageDisplay = capturedImage ? (
      <img src={capturedImage} alt="captured" width="100%" className='generatedImage'/>
    ) : (
      <video
          autoPlay
          playsInline
          muted
          id="webcam"
          width="100%"
          height="200"
        />
    );

    const buttons = captured ? (
      <div className='buttonParent'>
        <button className="deleteButton" onClick={discardImage}>
          {" "}
          Delete Photo{" "}
        </button>
      </div>
    ) : (
      <div className='buttonParent'>
      <button className="captureButton" onClick={captureImage}>
        
      </button>
      </div>
    );

    return (
      <div>
        <div className="imageCanvas">{imageDisplay}</div>
        {buttons}
      </div>
    );
  }
}
export default CameraControl;
