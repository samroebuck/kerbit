import React from 'react';
import {
  Link
} from "react-router-dom";
// Images
import BackArrow from '../../images/backArrow.svg'
import AppBar from './AppBar';


const Contact = props => {

const formSubmit = (e) => {
  console.log('submiit')
  e.preventDefault();
  document.querySelector('.success').classList.add('show')
}

  return (
    <>
      <AppBar></AppBar>
      <Link to=''className='return'><img src={BackArrow} alt='back arrow'/></Link>
      <section className='contactpage'>
        <div className='contactpage__container'>
          <h3 className='contactpage__title'>
            SOMETHING WRONG WITH KERBIT?
            <br></br>
            <span>LET US KNOW!</span>
            
          </h3>
          <form name='kerbit-wrong' netlify='true' className='form' action='/thank-you' method='POST'>
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

            />

            <label htmlFor='message' className='form__extralabel'>
              What can we do for you?
            </label>
            <textarea
              className='form__extrainfo'
              name='message'
              rows='3'
              placeholder="What's the problem?"
            ></textarea>

            <button className='form__btn' type='submit' onSubmit={formSubmit}>
              Send
            </button>
          </form>
          <div id='success' className='success'>Form Submitted</div>
        </div>
      </section>
    </>
  );
};

export default Contact;
