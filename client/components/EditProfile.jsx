/**
 * ************************************
 *
 * @module  EditProfile
 * @author
 * @date
 * @description EditProfile components PopUp
 *
 * ************************************
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = (props) => {
  /*--------------------------------------- React Hooks ---------------------------------------*/
  const [userEdit, setUserEdit] = useState([]);
  useEffect(() => {
    fetchCookie();
  }, []);
  console.log('userInformation in edit Profile is ', userEdit);
  const { username, personal_bios } = userEdit;

  /*--------------------------------------- Feed Function ---------------------------------------*/
  const fetchCookie = async () => {
    try {
      const response = await fetch('/home/getuser');
      const result = await response.json();
      console.log('result.user is ', result.user);
      setUserEdit(result.user);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  return props.trigger ? ( // if trigger true popup!
    <div className='popup'>
      <div className='popup-innerProfile'>
        {/* Content inside popup */}
        <h2 className='popuptitle'>Edit Your Profile</h2>
        <div className='editleft'>
          <img
            className='editimg'
            src='./assets/profile-pic.jpeg'
            alt='Profile'
          />
          <p className='editUsername'>{username}</p>
        </div>
        <div className='editright'>
          <div className='editbio'>
            <p>{personal_bios}</p>
          </div>

          {/* Close Button */}
          <button className='close-btn' onClick={() => props.setTrigger(false)}>
            Close
          </button>
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    '' // else return nothing
  );
};

export default EditProfile;
