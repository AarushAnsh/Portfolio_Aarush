import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css';
import underline from '../../assets/nav_underline.svg'
import logo from '../../assets/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'



const Navbar = ({ hidden = false }) => {

  const[menu,setMenu] = useState("home");
  const menuRef = useRef();

   const openMenu = () =>{
    menuRef.current.style.right = "0"
   }
   const closeMenu = () =>{
    menuRef.current.style.right = "-350px"
   }


  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll();
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`navbar ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'navbar--hidden' : ''}`}>

         <img src={logo}  alt=''/>
         <img src={menu_open} alt='' className='nav-mob-open' 
          onClick={openMenu}
         />
         <ul 
            ref={menuRef}
            className="nav-menu">
            <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />

           <li>
             <AnchorLink className='anchor-link' href='#home'>
                  <p onClick={()=>setMenu("home")}>Home</p> 
              </AnchorLink>{menu==='home' ? (<img src={underline}/>) :(<></> )}
           </li>

           <li>
              <AnchorLink className='anchor-link' href='#about'> 
                <p onClick={()=>{setMenu("about")}}>Aboout Me</p>
              </AnchorLink>{menu==='about' ? (<img src={underline}/>) :(<></> )}
            </li>

           <li>
              <AnchorLink className='anchor-link' href='#services'>
                <p onClick={()=>{setMenu("services")}}>Services</p>
              </AnchorLink>{menu==='services' ? (<img src={underline}/>) :(<></> )}
           </li>

           {/* <li>
              <AnchorLink className='anchor-link' href='#work'>
                <p onClick={()=>{setMenu("work")}}>Portfolio</p>
              </AnchorLink>{menu==='work' ? (<img src={underline}/>) :(<></> )}
           </li> */}

           <li>
              <AnchorLink className='anchor-link' href="#contact">
                <p onClick={()=>{setMenu("contact")}}>Contact</p>
              </AnchorLink>{menu==='contact' ? (<img src={underline}/>) :(<></> )}
           </li>
         </ul>

         <div className="nav-connect">
            <AnchorLink className='anchor-link' href='#contact'> 
              Connect With Me
            </AnchorLink>
         </div>
      
    </div>
  )
}

export default Navbar
