import React from 'react';
import Loadable from 'react-loadable';

// code splitting
const Loading = () => <h1>Loading...</h1>; // loading component

const LoadExpanded = Loadable({
  loader: () => import('./ExpandedControl'),
  loading: Loading
});

const LoadCollapsed = Loadable({
  loader: () => import('./CollapseControl'),
  loading: Loading
});
// code splitting

const ControlBar = props => {
    const { prediction, disableOnForm } = props 

    const control = prediction ? (
      <LoadExpanded
        captureImage={props.captureImage}
        discardImage={props.discardImage}
        prediction={prediction}
        sharePredication={props.sharePredication}
        showForm={props.showForm}
      />
    ) : (
      <LoadCollapsed
        captureImage={props.captureImage}
        disabledOnForm={disableOnForm}
      />
    );

    return (<> {control} </>);
    }

export default ControlBar;
