import React, { Component } from "react";

class Camera extends Component {
  componentDidMount() {
    const { initializeCamera } = this.props;
    initializeCamera();
  }
  render() {
    const { capturedImage } = this.props;
    const imageDisplay = capturedImage ? ( <>
      <video autoPlay playsInline muted id="webcam" className='cameracontainer__cameravideo cameracontainer__cameravideo--noheight'/>
      <img
        className='cameracontainer__capturedimage'
        src={capturedImage}
        alt="captured"
      />
      </>
    ) : (
      <video autoPlay playsInline muted id="webcam" width="100%" height="200" className='cameracontainer__cameravideo'/>
    );

    return (
        <section className="cameracontainer">{imageDisplay}</section>
    );
  }
}
export default Camera;
