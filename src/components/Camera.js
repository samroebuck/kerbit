import React, { Component } from "react";

class Camera extends Component {
  componentDidMount() {
    const { initializeCamera } = this.props;
    initializeCamera();
  }
  render() {
    const { capturedImage } = this.props;
    const imageDisplay = capturedImage ? (
      <img
        className='cameracontainer__capturedimage'
        src={capturedImage}
        alt="captured"
        width="100%"
      />
      
    ) : (
      <video autoPlay playsInline muted id="webcam" width="100%" height="200" className='cameracontainer__cameravideo'/>
    );

    return (
      <div>
        <div className="cameracontainer">{imageDisplay}</div>
        {/* {buttons} */}
      </div>
    );
  }
}
export default Camera;
