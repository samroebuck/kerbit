import React from 'react';
// import {
//   Link
// } from "react-router-dom";
// // Images
// import BackArrow from '../../images/backArrow.svg'
// import AppBar from './AppBar';


// const Contact = props => {

//   return (
//     <>
//       <AppBar></AppBar>
//       <Link to=''className='return'><img src={BackArrow} alt='back arrow'/></Link>
//       <section className='contactpage'>
//         <div className='contactpage__container'>
//           <h3 className='contactpage__title'>
//             SOMETHING WRONG WITH KERBIT?
//             <br></br>
//             <span>LET US KNOW!</span>
            
//           </h3>
//           <form name='contact' netlify='true' className='form' method='POST'>
//             <input type='hidden' name='form-name' value='contact' />

//             <label htmlFor='name' className='form__label'>
//             Name
//             </label>
//             <input
//               className='form__wronginput'
//               type='text'
//               name='name'
//               required
//               placeholder='Name'
//             />

//             <label htmlFor='email' className='form__label'>
//               Email
//             </label>
//             <input
//               className='form__rightinput'
//               type='email'
//               name='email'
//               required
//               placeholder='Email'

//             />

//             <label htmlFor='message' className='form__extralabel'>
//               What can we do for you?
//             </label>
//             <textarea
//               className='form__extrainfo'
//               name='message'
//               rows='3'
//               placeholder="What's the problem?"
//             ></textarea>

//             <button className='form__btn' type='submit'>
//               Send
//             </button>
//           </form>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;


const encode = (data) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )
    .join('&');
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://kerbit.app/Contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name:{' '}
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{' '}
            <input
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{' '}
            <textarea
              name='message'
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    );
  }
}

export default Contact;