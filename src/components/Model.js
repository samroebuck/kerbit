import React from "react";
import * as automl from "@tensorflow/tfjs-automl";

class Model extends React.Component {
  state = { prediction: ''}

  componentDidUpdate() {
    this.runModel();
  }

  async runModel() {
    const modelurl = process.env.PUBLIC_URL + "/model/model.json";
    const model = await automl.loadImageClassification(modelurl);
    const image = document.querySelector(".generatedImage");
    let predictions = await model.classify(image);

    predictions.sort((a,b) => (a.prob > b.prob) ? -1 : ((b.prob > a.prob) ? 1 : 0));


    // Show the resulting object on the page.
    const pre = document.createElement("pre");
// this.setState({
//       prediction: predictionText
//     })
    pre.textContent = JSON.stringify(predictions, null, 1);
    document.body.append(pre);
  }
  render() {
    return <div>{this.state.prediction}</div>;
  }
}

export default Model;
