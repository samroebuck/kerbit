import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
// Images
import BackArrow from '../../images/backArrow.svg';
import AppBar from './AppBar';

const Contact = () => {

  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');


  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message}
    
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch(error => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }
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
          <form
            name='kerbit-wrong'
            netlify='true'
            className='form'
            action='/thank-you/'
            method='POST'
            onSubmit={handleSubmit}
          >
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
              value={name} onChange={handleChange} 
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
              value={email} onChange={handleChange} 
            />

            <label htmlFor='message' className='form__extralabel'>
              What can we do for you?
            </label>
            <textarea
              className='form__extrainfo'
              name='message'
              rows='3'
              placeholder="What's the problem?"
              value={message} onChange={handleChange} 
            ></textarea>

            <button className='form__btn' type='submit'>
              Send
            </button>
          </form>
          <h3>{status}</h3>
        </div>
      </section>
    </>
  );
};
export default Contact;
