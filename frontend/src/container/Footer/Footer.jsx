import React, { useState } from 'react'
import './Footer.scss'


import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import images from '../../constants/images'
const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData;

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name:  name,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text'>Let’s <span>Build</span> Something <span>Great</span> Together</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a 
            href='mailto:zilodev831@gmail.com'
            className='p-text'
          >
            zilodev831@gmail.com
         </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a 
            href='tel: +(237)653-344-368'
            className='p-text'
          >
           +(237) 653-344-368
          </a>
        </div>
      </div>
      
      {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={handleChange}
            name='name'
          />
        </div>
        <div className='app__flex'>
          <input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={handleChange}
            name='email'
          />
        </div>

        <div>
          <textarea
            className='p-text'
            placeholder='Your message'
            value={message}
            name='message'
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='p-text' onClick={handleSubmit}>
          {
            loading ? 'Sending...' : 'Send Message'
          }
        </button>
      </div>
      : <h3 className='head-text'>Thank You for Getting in Touch</h3>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)