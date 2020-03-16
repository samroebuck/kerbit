import React from 'react';
// components
import ExpandedControl from './ExpandedControl'
import CollapseControl from './CollapseControl';


class ControlBar extends React.Component {
  componentDidUpdate() {
    if (this.props.prediction) {
      console.log('has prediction');
    }
  }
  render() {
    const prediction = this.props.prediction;
    const disableOnForm = this.props.disableOnForm;

    const control = prediction ? (
      <ExpandedControl 
        captureImage={this.props.captureImage}
        discardImage={this.props.discardImage}
        prediction={prediction}
        sharePredication={this.props.sharePredication}
        showForm={this.props.showForm}
      />
    ) : (
      <CollapseControl 
        captureImage={this.props.captureImage}
        disabledOnForm={disableOnForm}
      />
    );

    return <> {control} </>;
  }
}

export default ControlBar;
