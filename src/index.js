import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import Web from './Web';
import * as serviceWorker from './serviceWorker';
// import LoadingSpinner from './components/App/LoadingSpinner'

// fonts
import './fonts/Brandon_bld.otf';
import './fonts/Brandon_med.otf';
import './fonts/Brandon_reg.otf';
import './fonts/RobotoSlab-Bold.ttf';
import './fonts/RobotoSlab-Regular.ttf';
import './fonts/RobotoSlab-Light.ttf';

// code splitting
import Loadable from 'react-loadable';

const LoadApp = Loadable({
  loader: () => import('./App'),
  loading: 'loading'
});

const LoadWeb = Loadable({
  loader: () => import('./Web'),
  loading: 'loading'

});

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloaded: false
    };
  }

  componentDidMount() {
    if (navigator.standalone) {
      console.log('Launched: Installed (iOS)');
      this.setState({
        downloaded: true
      });

      document.querySelector('#root').classList.remove('webMain');
    } else if (matchMedia('(display-mode: standalone)').matches) {
      console.log('Launched: Installed');
      this.setState({
        downloaded: true
      });
      document.querySelector('#root').classList.remove('webMain');
    } else {
      console.log('Launched: Browser Tab');
      this.setState({
        downloaded: false
      });
    }
  }

  render() {
    return (
      <>
        {this.state.downloaded === true ? <LoadApp /> : <LoadWeb />}
        {/* <LoadApp /> */}
      </>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
