import React from "react";
import * as automl from "@tensorflow/tfjs-automl";

class Model extends React.Component {
  componentDidUpdate() {
    this.runModel()
  }

  async runModel() {
    const modelurl = process.env.PUBLIC_URL + '/model/model.json';
    const model = await automl.loadImageClassification(modelurl);
    const image = document.querySelector('.generatedImage')
    console.log(image)
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
