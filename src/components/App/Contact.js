import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// Images
import BackArrow from '../../images/backArrow.svg';
import AppBar from './AppBar';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'kerbit-wrong', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <>
        <AppBar></AppBar>
        <Link to='' className='return'>
          <img src={BackArrow} alt='back arrow' />
        </Link>
        <section className='contactpage'>
          <div className='contactpage__container'>
            <h3 className='contactpage__title'>
              SOMETHING WRONG WITH KERBIT?
              <br></br>
              <span>LET US KNOW!</span>
            </h3>
            {/* <form onSubmit={this.handleSubmit}>
              <input type='hidden' name='form-name' value='kerbit-wrong' />

              <label htmlFor='name' className='form__label'>
                Name
              </label>
              <input
                className='form__wronginput'
                type='text'
                name='name'
                required
                placeholder='Name'
                value={name}
                onChange={this.handleChange}
              />

              <label htmlFor='email' className='form__label'>
                Email
              </label>
              <input
                className='form__rightinput'
                type='email'
                name='email'
                required
                placeholder='Email'
                value={email}
                onChange={this.handleChange}
              />

              <label htmlFor='message' className='form__extralabel'>
                What can we do for you?
              </label>
              <textarea
                className='form__extrainfo'
                name='message'
                rows='3'
                placeholder="What's the problem?"
                value={message}
                onChange={this.handleChange}
              ></textarea>

              <button className='form__btn' type='submit'>
                Send
              </button>
            </form> */}
            <form onSubmit={this.handleSubmit}>
              <p>
                <label>
                  Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message" value={message} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Contact);
