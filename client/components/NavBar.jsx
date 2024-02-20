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
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Calendar from './Calendar.jsx';
import EditProfile from './EditProfile.jsx';
import About from './About.jsx';
import Feed from './Feed.jsx';

const NavBar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [profilePopup, setProfilePopup] = useState(false);
  const [aboutPopup, setAboutPopup] = useState(false);

  const search = async () => {
    let value = document.getElementById('search').value;

    // If empty search, reload
    if (!value) window.location.reload();

    value = value[0].toUpperCase() + value.slice(1).toLowerCase();
    console.log('value in search is ', value);
    try {
      const response = await fetch(`/home/${value}`);
      const result = await response.json();
      /* result is: [{ user: current user information }] */
      const user = result.user;
      console.log('user received is ', user);
      let feedDisplay = document.querySelector('.feedDisplay');

      // Empty feed then rebuild search
      feedDisplay.innerHTML = '';
      // If not match, return empty
      if (!user) return;

      const feeds = user.map((el, i) => (
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, delay: i * 0.3 }}
          key={i}
        >
          <Feed userInformation={el} key={i} />
        </motion.div>
      ));
      console.log('feeds: ', feeds);

      // NEED TO RENDER JUST LIKE APP TO SHOW THE FEEDS
      const root = createRoot(feedDisplay);
      root.render(feeds);
    } catch (error) {
      console.error('Error fetching search information:', error);
    }
  };

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
          onClick={search}
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
