/**
 * ************************************
 *
 * @module  About.jsx
 * @author
 * @date
 * @description About the Project
 *
 * ************************************
 */

import React from 'react';
import { motion } from 'framer-motion';

const About = (props) => {
  return props.trigger ? ( // if trigger true popup!
    <motion.div
      className='popup'
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <div className='popup-about'>
        <h2 className='popuptitle'>About This Project</h2>
        <h6>Scratch Team</h6>
        <motion.div className='carousel' whileTap={{ cursor: 'grabbing' }}>
          <motion.div
            drag='x'
            dragConstraints={{
              right: 300,
              left: -100,
            }}
            className='inner-carousel'
            initial={{ opacity: 0, translateX: 0 }}
            animate={{
              opacity: 1,
              translateX: -300,
            }}
            transition={{ duration: 5, delay: 0.7 }}
          >
            <motion.div className='item'>
              <p>Quan Nguyen</p>
              <img src='images/Quan.png' alt='Quan' />
              <p id='role'>FrontEnd</p>
              <p>Git Lead</p>
            </motion.div>
            <motion.div className='item'>
              <p>Jacob McFarland</p>
              <img src='images/Jacob.png' alt='Jacob' />
              <p id='role'>FrontEnd</p>
              <p>Style Lead</p>
            </motion.div>
            <motion.div className='item'>
              <p>Justin Lin</p>
              <img src='images/Justin.png' alt='Justin' />
              <p id='role'>BackEnd</p>
              <p>Server Lead</p>
            </motion.div>
            <motion.div className='item'>
              <p>Stan Louie</p>
              <img src='images/Stan.png' alt='Stan' />
              <p id='role'>BackEnd</p>
              <p>Scrum Lead</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Close Button */}
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
    </motion.div>
  ) : (
    '' // else return nothing
  );
};

export default About;
