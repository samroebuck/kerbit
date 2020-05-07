import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// fonts
import './fonts/Brandon_bld.otf';
import './fonts/Brandon_med.otf';
import './fonts/Brandon_reg.otf';
import './fonts/RobotoSlab-Bold.ttf';
import './fonts/RobotoSlab-Regular.ttf';
import './fonts/RobotoSlab-Light.ttf';

// code splitting
import Loadable from 'react-loadable';

const Loading = () => <h1>Loading...</h1>;

const LoadApp = Loadable({
  loader: () => import('./App'),
  loading: Loading,
});

const LoadWeb = Loadable({
  loader: () => import('./Web'),
  loading: Loading,
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloaded: false,
    };
  }

  componentDidMount() {
    if (navigator.standalone) {
      this.setState({
        downloaded: true,
      });

      document.querySelector('#root').classList.remove('webMain');
    } else if (matchMedia('(display-mode: standalone)').matches) {
      this.setState({
        downloaded: true,
      });
      document.querySelector('#root').classList.remove('webMain');
    } else {
      this.setState({
        downloaded: false,
      });
    }
  }

  render() {
    return (
      <>
        {this.state.downloaded === true ? <LoadApp /> : <LoadWeb />}
      </>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.register();
