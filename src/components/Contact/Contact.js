import React, { useState, useEffect, useRef } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import loaction_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  const [status, setStatus] = useState({ success: false, message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const emailRef = useRef(null);

  // Handle email click - shows email options
  const handleEmailClick = () => {
    setShowEmailOptions(!showEmailOptions);
  };

  // Handle specific email client selection
  const handleEmailClient = (client) => {
    const email = 'aarushkumar2178@gmail.com';
    switch(client) {
      case 'gmail':
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
        break;
      case 'outlook':
        window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${email}`, '_blank');
        break;
      case 'yahoo':
        window.open(`https://compose.mail.yahoo.com/?to=${email}`, '_blank');
        break;
      case 'default':
        window.open(`mailto:${email}`, '_blank');
        break;
      default:
        break;
    }
    setShowEmailOptions(false);
  };

  // Handle phone click - opens calling options
  const handlePhoneClick = () => {
    window.open('tel:+918804535616', '_blank');
  };

  // Close email options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emailRef.current && !emailRef.current.contains(event.target)) {
        setShowEmailOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1ae57bd0-04e6-4785-90f4-57a7d03f4c0e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setSubmitting(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatus({ success: true, message: res.message || 'Message sent successfully!' });
      event.target.reset();
    } else {
      setStatus({ success: false, message: res.message || 'Something went wrong. Please try again.' });
    }
    setSubmitting(false);
  };
  return (
    <div>
        <div id='contact' className="contact reveal">
            <div className="contact-title">
                <h1>Get in Touch </h1>
                <img src={theme_pattern} />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Collaborate</h1>
                    <p>I'm currently available for new opportunities and exciting projects. Whether you need a complete website, a React application, or frontend consultation, I'd love to discuss how I can help bring your vision to life. Let's create something amazing together!</p>
                    <div className="contact-details">
                        <div className="contact-detail clickable email-container" ref={emailRef} onClick={handleEmailClick}>                     
                         <img src= {mail_icon}    alt=''/>  <p>aarushkumar2178@gmail.com </p>
                         {showEmailOptions && (
                           <div className="email-options">
                             <div className="email-option" onClick={() => handleEmailClient('gmail')}>
                               📧 Gmail
                             </div>
                             <div className="email-option" onClick={() => handleEmailClient('outlook')}>
                               📧 Outlook
                             </div>
                             <div className="email-option" onClick={() => handleEmailClient('yahoo')}>
                               📧 Yahoo Mail
                             </div>
                             <div className="email-option" onClick={() => handleEmailClient('default')}>
                               📧 Default Email
                             </div>
                           </div>
                         )}
                        </div>
                        <div className="contact-detail clickable" onClick={handlePhoneClick}>
                          <img src={call_icon} alt='' /> <p> +91 8804535616 </p>
                        </div>
                        <div className="contact-detail">
                        <img src={loaction_icon} alt='' /> <p> Delhi</p>
                            
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=''>Full Name</label>
                    <input type='text' placeholder='Enter your full name' name='name'/>
                    
                    <label htmlFor=''>Email Address</label>
                    <input 
                      type='email'
                      placeholder='Enter your email address'
                      name='email'/>
                      
                      <label htmlFor=''>Project Details</label>
                      <textarea name='message'   rows="8" placeholder='Tell me about your project requirements, timeline, and any specific features you need...'></textarea>
                      <button className='contact-submit' type='submit' disabled={submitting}>
                        {submitting ? 'Sending Message...' : 'Send Message'}
                      </button> 
                      {status.message && (
                        <p style={{ color: status.success ? '#79ffa8' : '#ff9797' }}>{status.message}</p>
                      )}



                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
