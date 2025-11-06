import React, { useState, useRef, useEffect, useCallback } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Aarush_Resume.pdf'

const Hero = () => {
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const resumeRef = useRef(null);
  const downloadLinkRef = useRef(null);

  const handleResumeClick = useCallback((e) => {
    e.stopPropagation();
    const newState = !showResumeOptions;
    setShowResumeOptions(newState);
    
    // If opening dropdown, scroll up a bit to show both options
    if (newState && resumeRef.current) {
      setTimeout(() => {
        const buttonRect = resumeRef.current.getBoundingClientRect();
        const dropdownHeight = 200; // Approximate dropdown height
        const spaceBelow = window.innerHeight - buttonRect.bottom;
        
        // If dropdown would be cut off, scroll up
        if (spaceBelow < dropdownHeight + 20) {
          window.scrollBy({
            top: -(dropdownHeight - spaceBelow + 50),
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [showResumeOptions]);

  const handleOpenResume = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(resume, '_blank', 'noopener,noreferrer');
    setShowResumeOptions(false);
  }, []);

  const handleDownloadResume = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (downloadLinkRef.current) {
      downloadLinkRef.current.click();
    }
    setShowResumeOptions(false);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resumeRef.current && !resumeRef.current.contains(event.target)) {
        setShowResumeOptions(false);
      }
    };

    if (showResumeOptions) {
      // Use setTimeout to avoid immediate closure
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showResumeOptions]);

  return (
    <div id='home' className='hero reveal'>
      
      <img src={profile_img} alt='' />
      <h1> <span>I'm AARUSH </span>  FRONTEND DEVELOPER </h1>
      <p>Passionate Frontend Developer specializing in React.js, JavaScript, and modern web technologies. I create exceptional user experiences through clean, efficient, and scalable code.</p>
      <div className='hero-action'>

      <div className="hero-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink>
      </div>
      <div className="hero-resume-container" ref={resumeRef}>
        <button 
          className="hero-resume" 
          onClick={handleResumeClick}
          type="button"
          aria-expanded={showResumeOptions}
          aria-haspopup="true"
        >
          My Resume
        </button>
        {showResumeOptions && (
          <div 
            className="hero-resume-options" 
            role="menu"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="hero-resume-option" 
              onClick={handleOpenResume}
              type="button"
              role="menuitem"
            >
              📄 Open Resume
            </button>
            <button 
              className="hero-resume-option" 
              onClick={handleDownloadResume}
              type="button"
              role="menuitem"
            >
              ⬇️ Download Resume
            </button>
          </div>
        )}
        <a
          ref={downloadLinkRef}
          href={resume}
          download="Aarush_Resume.pdf"
          style={{ display: 'none' }}
          aria-hidden="true"
        >
          Download
        </a>
      </div>

      </div>
      
    </div> 
  )
}

export default Hero;
