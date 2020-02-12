import React from "react";
import CameraButton from "../images/camerabutton.svg";

class ControlBar extends React.Component {
  state = { prediction: "" };

  componentDidUpdate() {
    if (this.props.prediction) {
      console.log("has prediction");
    }
  }

  render() {
    const { captureImage, discardImage } = this.props;
    const prediction = this.props.prediction;
    const control = prediction ? (
      <div className="controls controls--expanded">
        <button className="controls__capturebtn" onClick={captureImage}>
          <img src={CameraButton} alt="camera shutter button" />
        </button>
        <br></br>
        <div className="response">
          <header className="response__prediction">
            <h2>IT'S... {this.props.prediction}</h2>
          </header>
        </div>
        <button className='controls__restart' onClick={discardImage}>Restart</button>
      </div>
    ) : (
      <div className="controls">
        <button className="controls__capturebtn" onClick={captureImage}>
          <img src={CameraButton} alt="camera shutter button" />
        </button>
      </div>
    );

    return <> {control} </>;
  }
}

export default ControlBar;
