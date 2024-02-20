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
import { useState } from 'react';

// useState to toggle calendar

const NavBar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [profilePopup, setProfilePopup] = useState(false);

  return (
    <nav className='navBar'>
      <div className='gold'>Tech Tango</div>

      <nav className='navRight'>
        <p className='calendar' onClick={() => setButtonPopup(true)}>
          Calendar
        </p>
        <p className='editProfile' onClick={() => setProfilePopup(true)}>
          Edit Profile
        </p>
        <p className='about'>About</p>
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
    </nav>
  );
};

export default NavBar;
