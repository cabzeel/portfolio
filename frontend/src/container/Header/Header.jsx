import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import images from '../../constants/images'
import {AppWrap} from '../../wrapper'

const Header = () => {
  const quantity = 10;
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='app__header app__flex' id='home'>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app-flex'>
            <span>&#128075;</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello I am </p>
              <h1 className='head-text'>Cabzeel</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer </p>
            <p className='p-text'>CEO @zeeltech solutions</p>
          
          </div>
        </div>
        
      </motion.div>

      <motion.div
        whileInView={{x: [100, 0], opacity: [0, 1]}}
        transition={{duration: 0.6, delayChildren: 0.5}}
      
        className='app__header-img'
      >
        <img src={images.profile} alt='profile img'
          
        />
        <motion.img
          whileInView={{x: [100, 0], scale: [0, 1]}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          className='overlay__circle'
          src={images.circle}
          alt='profile.circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
        style={{ "--quantity": quantity}}
      >
        {[images.sass, images.react, images.node].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`} style={{ "--position": index + 1 }}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home', 'app__header')