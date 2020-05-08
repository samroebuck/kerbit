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

const Loading = () => (
  <h1
    className='load'
    style={{
      color: '#eb9089',
      position: 'absolute',
      top: '40%',
      height: '20vh',
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    Loading...
  </h1>
);

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

  // isIE = () => {
  //   let ua = navigator.userAgent;
  //   /* MSIE used to detect old browsers and Trident used to newer ones*/
  //   var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;

  //   return is_ie;
  // };

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

  /* Create an alert to show if the browser is IE or not */

  render() {
    return <>{this.state.downloaded === true ? <LoadApp /> : <LoadWeb />}</>;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.register();
