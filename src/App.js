import React from "react";
import "./App.css";
import Webcam from "react-webcam";


class App extends React.Component {
  render() {
    const videoConstraints = {
      facingMode: { exact: "environment" }
    };

    return <Webcam videoConstraints={videoConstraints} />;
  }
}

export default App;
