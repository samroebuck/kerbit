import React, { useState } from "react";
import {
  Link
} from "react-router-dom";
// Images
import BackArrow from '../../images/backArrow.svg'
import AppBar from './AppBar';

const onSubmit = async (event, setSubmitText) => {
  event.preventDefault();
  setSubmitText("Submitting ...");
  const formElements = [...event.currentTarget.elements];
  const isValid =
    formElements.filter(elem => elem.name === "bot-field")[0].value === "";

  const validFormElements = isValid ? formElements : [];

  if (validFormElements.length < 1) {
    //or some other cheeky error message
    setSubmitText("It looks like you filled out too many fields!");
  } else {
    const filledOutElements = validFormElements
      .filter(elem => !!elem.value)
      .map(
        element =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value)
      )
      .join("&");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: filledOutElements
    })
      .then(() => {
        setSubmitText("Successfully submitted!");
      })
      .catch(_ => {
        setSubmitText(
          "There was an error with your submission, please email me using the address above."
        );
      });
  }
};


const Contact = () => {
  const [submitText, setSubmitText] = useState(null);
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
          <form name='contact' netlify='true' className='form' method='POST' onSubmit={e => onSubmit(e, setSubmitText)}>
          <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you expect to hear from us!
            <input name="bot-field" value="" readOnly />
          </label>
        </p>
            <input type='hidden' name='form-name' value='contact' />

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

            <button className='form__btn' type='submit'>
              Send
            </button>
          </form>

        </div>
        <p>{submitText}</p>
      </section>
    </>
  );
   }



export default Contact;
