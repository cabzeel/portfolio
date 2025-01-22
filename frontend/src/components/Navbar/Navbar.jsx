import React, { useState } from 'react';
import './Navbar.scss';
import images from '../../constants/images';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion'
const Navbar = () => {

   const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
         <h1 className='logo-text'>
            ZEEL
            <span>TECH</span>
         </h1>
      </div>
      <ul className='app__navbar-links'>
         {
            ['home', 'about', 'work', 'skill', 'contact'].map(navItem => (
               <li key={`link-${navItem}`} className='app__flex p-text'>
                  <div />
                  <a href={`#${navItem}`}>{navItem}</a>
               </li>
         ))
         }
      </ul>

      <div className='app__navbar-menu'>
         <HiMenuAlt4  onClick={() => setToggle(true)}/>

         {toggle && (
               <motion.div
                  whileInView={{x:[300, 0]}}
                  transition={{duration: 0.85,  ease: 'easeOut'}}
               >
                  <HiX  onClick={() => setToggle(false)}/>
                  
                  <ul>
                     {['home', 'about', 'work', 'skill', 'contact'].map(navItem => (
                     <li key={navItem} >
                        <a href={`#${navItem}`}
                           onClick={() => setToggle(false)}
                        >{navItem}</a>
                     </li>
                  ))
                  }
                  </ul>
               </motion.div>
            )
         }
      </div>
    </nav>
  )
}

export default Navbar