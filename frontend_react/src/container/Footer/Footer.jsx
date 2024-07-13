import React, {useState} from 'react'
import './Footer.scss';
import { AppWrap } from '../../Wrapper';
import { images } from '../../constants';
import { client } from '../../client';

const Footer = () => {
  const [formData, setformData] = useState({name:'',email:'',message:''});
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setloading] = useState(false);

  const{ name, email, message } = formData;

  const handleChangeInput = (e) => {
    const {name , value } = e.target;

    setformData({ ...formData, [name]: value});
  }

  const handleSubmit = () => {
    setloading(true);

    const contact = {
      _type:'contact',
      name: name,
      email: email,
      message:message,
    }

    client.create(contact)
      .then(() => {
        setloading(false);
        setisFormSubmitted(true);
      })
  }

  return (
    <div className='app__footer'>
      <h2 className='head-text'>Take a Coffee & Chat With Me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:praveenashivaaniprabha@gmial.com' className='p-text'>praveenashivaaniprabha@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel : 9345776788' className='p-text'>93455776788</a>
        </div>
      </div>

      {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name ='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your Email' name ='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      :<div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>}
    </div>
  )
}

export default AppWrap(Footer,"Footer");
