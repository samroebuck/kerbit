import React from "react";
import * as automl from "@tensorflow/tfjs-automl";

class Model extends React.Component {
  componentDidUpdate() {
    this.runModel()
  }

  async runModel() {
    const modelurl = 'https://localhost:3000/model/model.json';
    const model = await automl.loadImageClassification(modelurl);
    const image = this.props.capturedImage;
    const predictions = await model.classify(image);
    // [END load_and_run_model]
    console.log(predictions);
    // Show the resulting object on the page.
    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(predictions, null, 1);
    document.body.append(pre);
  }
  render() {
    return <div>This is the model component</div>;
  }
}

export default Model;
