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
    const body = document.getElementById('new_bio').value;
    console.log('body after click is ', body);
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
      .then((res) => res.json())
      .then((data) => {
        // Got response from server
        alert(data);
      })
      .catch((err) => console.log('savebio fetch ERROR: ', err));
  };

  return props.trigger ? ( // if trigger true popup!
    <div className='popup'>
      <div className='popup-innerProfile'>
        <h2 className='popuptitle'>Edit Your Profile</h2>
        <hr />
        <div className='editcontainer'>
          {/* Content inside popup */}
          <div className='editleft'>
            <img
              className='feedimg-edit'
              src='./assets/profile-pic.jpeg'
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
    </div>
  ) : (
    '' // else return nothing
  );
};

export default EditProfile;
