


import React, { useState } from 'react'
import footer_logo from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"
import './Footer.css'

const Footer = () => {
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Here you can integrate with your email service (e.g., EmailJS, Formspree, etc.)
    // For now, we'll simulate a successful subscription
    console.log('Subscribing email:', email);
    
    setIsSubscribed(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

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

  // Handle LinkedIn click
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/aarush-kumar-36257027b/', '_blank');
  };

  // Handle GitHub click
  const handleGitHubClick = () => {
    window.open('https://github.com/AarushAnsh', '_blank');
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>AARUSH KUMAR</h2>
          <p>Frontend Developer specializing in React.js and modern web technologies. Creating exceptional digital experiences through clean, efficient code.</p>
          <div className="footer-social">
            <div className="footer-email-container">
              <button 
                className="social-link email-button" 
                onClick={handleEmailClick}
              >
                📧 Email
              </button>
              {showEmailOptions && (
                <div className="footer-email-options">
                  <div className="footer-email-option" onClick={() => handleEmailClient('gmail')}>
                    📧 Gmail
                  </div>
                  <div className="footer-email-option" onClick={() => handleEmailClient('outlook')}>
                    📧 Outlook
                  </div>
                  <div className="footer-email-option" onClick={() => handleEmailClient('yahoo')}>
                    📧 Yahoo Mail
                  </div>
                  <div className="footer-email-option" onClick={() => handleEmailClient('default')}>
                    📧 Default Email
                  </div>
                </div>
              )}
            </div>
            <button 
              className="social-link linkedin-button" 
              onClick={handleLinkedInClick}
            >
              💼 LinkedIn
            </button>
            <button 
              className="social-link github-button" 
              onClick={handleGitHubClick}
            >
              💻 GitHub
            </button>
          </div>
        </div>
        <div className="footer-top-right">
            <form onSubmit={handleSubscribe} className="footer-subscribe-form">
              <div className="footer-email-input">
                  <img src={user_icon}  alt='' />
                  <input 
                    type='email' 
                    placeholder='Enter your email for updates'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                      setIsSubscribed(false);
                    }}
                  />
              </div>
              {error && <span className="footer-error">{error}</span>}
              {isSubscribed && <span className="footer-success">Thank you for subscribing!</span>}
              <button type="submit" className="footer-subscribe">
                  Subscribe
              </button>
            </form>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Aarush Kumar. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
