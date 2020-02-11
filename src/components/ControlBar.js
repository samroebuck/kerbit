import React from "react";
import CameraButton from "../images/camerabutton.svg";

class ControlBar extends React.Component {
  state = { prediction: "" };

//   static getDerivedStateFromProps(nextProps) {
//     return {
//       prediction: nextProps.prediction
//     };
//   }
  componentDidUpdate() {
      if (this.props.prediction) {
          console.log('has prediction')
      }
  }


  render() {
    const { captureImage } = this.props;
    const prediction = this.props.prediction;
    const control = prediction ? (
        <div className="controls controls--expanded">
        <button className="controls__capturebtn" onClick={captureImage}>
          <img src={CameraButton} alt="camera shutter button" />
        </button>
        <br></br>
        <h2>{this.props.prediction}</h2>
      </div>
        ) : (
            <div className="controls">
            <button className="controls__capturebtn" onClick={captureImage}>
              <img src={CameraButton} alt="camera shutter button" />
            </button>
          </div>
        );


    return <> { control } </>;
  }
}

export default ControlBar;
