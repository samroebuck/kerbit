import React from 'react';
// Images
import KerbitLogo from '../../images/logo-refined-spacing.svg';

const FixForm = props => {
  return (
    <div className='form'>
      <h3 className='form__title'>
        What did <img src={KerbitLogo} alt='kerbit logo' /> <br></br> get wrong?
      </h3>
      <form name='kerbit-wrong' netlify='true'>
        <input type='hidden' name='form-name' value='kerbit-wrong' />

        <label htmlFor='wrong' className='form__wronglabel'>
          Kerbit guessed:
        </label>
        <input className='form__wronginput' type='text' name='wrong' required />

        <label htmlFor='right' className='form__rightlabel'>
          It was actually:
        </label>
        <input className='form__rightinput' type='text' name='right' required />

        <label htmlFor='message' className='form__extralabel'>
          Any extra info?
        </label>
        <textarea
          className='form__extrainfo'
          name='message'
          rows='3'
        ></textarea>

        <button className='form__btn' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default FixForm;
