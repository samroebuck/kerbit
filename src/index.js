import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Web from './Web';
import * as serviceWorker from './serviceWorker';


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
        })
      } else if (matchMedia('(display-mode: standalone)').matches) {
        console.log('Launched: Installed');
        this.setState({
          downloaded: true
        })
      } else {
        console.log('Launched: Browser Tab');
        this.setState({
          downloaded: false
        })
      }
  }


  render() {
    return (
      <>
       {this.state.downloaded === true ? <App /> : <Web />}
       
        {/* <App/> */}
       </>
    );
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
