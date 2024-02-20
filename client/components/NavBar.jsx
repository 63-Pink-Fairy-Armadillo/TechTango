/**
 * ************************************
 *
 * @module  NavBar.jsx
 * @author
 * @date
 * @description Nav
 *
 * ************************************
 */

import React from 'react';
import Calendar from './Calendar.jsx';
import EditProfile from './EditProfile.jsx';
import About from './About.jsx';
import { useState } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [profilePopup, setProfilePopup] = useState(false);
  const [aboutPopup, setAboutPopup] = useState(false);

  return (
    <motion.nav
      className='navBar'
      initial={{ opacity: 0, translateX: 50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <div className='gold'>Tech Tango</div>
      <nav className='navRight'>
        <p className='calendar' onClick={() => setButtonPopup(true)}>
          Calendar
        </p>
        <p className='editProfile' onClick={() => setProfilePopup(true)}>
          Edit Profile
        </p>
        <p className='about' onClick={() => setAboutPopup(true)}>
          About
        </p>
        <input type='text' name='search' id='search' placeholder='Search' />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          className='bi bi-search'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
        </svg>
      </nav>
      <Calendar trigger={buttonPopup} setTrigger={setButtonPopup}></Calendar>
      <EditProfile
        trigger={profilePopup}
        setTrigger={setProfilePopup}
      ></EditProfile>
      <About trigger={aboutPopup} setTrigger={setAboutPopup}></About>
    </motion.nav>
  );
};

export default NavBar;
