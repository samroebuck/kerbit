import React from 'react';
// styles
import './styles/webStyles.scss';
//components

//images
import logo from './images/logo-refined-spacing.svg'
import app from './images/mockup-forweb.svg'




class Web extends React.Component {

    componentDidMount() {

        //   alert(isiOS);
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.

            // Update UI notify the user they can install the PWA
            // alert('Install prompt')
          });
    }

    render() {
        return (
            <>
                <img src={logo} alt='Kerbit Logo'></img>
                <img src={app} alt='Kerbit running on a mobile device'></img>

            </>
        );
    }
}

export default Web;