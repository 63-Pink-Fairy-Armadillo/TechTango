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
import { motion } from 'framer-motion';

const EditProfile = (props) => {
  /*--------------------------------------- React Hooks ---------------------------------------*/
  const [userEdit, setUserEdit] = useState([]);
  useEffect(() => {
    fetchCookie();
  }, []);
  const { username, personal_bios } = userEdit;

  /*--------------------------------------- Feed Function ---------------------------------------*/
  const fetchCookie = async () => {
    try {
      const response = await fetch('/home/getuser');
      const result = await response.json();
      setUserEdit(result.user);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };
  const saveBio = () => {
    const body = { newbio: document.getElementById('new_bio').value };
    /**
     * "whatever we save" = req.body
     */
    fetch('/home/editProfile', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((data) => {
        console.log(data);
        // Close the tab
        props.setTrigger(false);
        window.location.reload();
      })
      .catch((err) => console.log('fetch editProfile PATCH ERROR: ', err));
  };

  return props.trigger ? ( // if trigger true popup!
    <motion.div
      className='popup'
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <div className='popup-innerProfile'>
        <h2 className='popuptitle'>Edit Your Profile</h2>
        <hr />
        <div className='editcontainer'>
          {/* Content inside popup */}
          <div className='editleft'>
            <img
              className='feedimg-edit'
              src='images/profile-pic.jpeg'
              alt='Profile'
            />
            <p className='editUsername'>{username}</p>
          </div>
          <div className='editright'>
            <div className='editbio'>
              <p>Current Bio: </p>
              <p className='oldbio'>{personal_bios}</p>
            </div>
            <hr />
            <div className='bioEdit'>
              <label htmlFor='new_bio'>New Bio</label>
              <textarea
                name='new_bio'
                id='new_bio'
                placeholder='Update your bio here:'
                rows='3'
              />
            </div>
            <div className='savebiocontainer'>
              <button className='savebio' onClick={saveBio}>
                Save Bio
              </button>
            </div>
          </div>
        </div>
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

export default EditProfile;
