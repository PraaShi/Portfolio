import React, {useState} from 'react';
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import { motion } from 'framer-motion'

import './Navbar.scss'
import { images } from '../../constants'

const Navebar = () => {
  const[toggle,setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['header','about','work','skills','Testimonials','Footer'].map((item)=> (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            {
              item === 'Testimonials' ? <a href={`#${item}`}>Education</a> : item === "Footer" ? <a href={`#${item}`}>Contact</a> :<a href={`#${item}`}>{item}</a>
            }
            
          </li>
        ))}
      </ul>
      {/* <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        
        {toggle && (
          <motion.div   whileInView={{x:[300,0]}} transition={{duration:0.85,ease:'easeOut'}}>
            <div className='menu'>
              <HiX onClick={()=> setToggle(false)} /> 
              <ul>
              {['header','about','contact','work','skills'].map((item)=> (
                <li className='app__flex p-text' key={item}>
                  <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
                </li>
          ))}
              </ul>
            </div>

          </motion.div>
        )}
      </div> */}
    </nav>
  )
}

export default Navebar
