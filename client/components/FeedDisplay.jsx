/**
 * ************************************
 *
 * @module  FeedDisplay
 * @author
 * @date
 * @description Display feed
 *
 * ************************************
 */

import React from 'react';
import { useState, useEffect } from 'react';
import Feed from './Feed.jsx';

const FeedDisplay = () => {
  const BACKEND_URL = 'http://localhost:3000';
  const [userInformation, setUserInformation] = useState('');
  const [othersInformation, setOthersInformation] = useState('');
  const [image, setImage] = useState('');

  // Send Fetch User Information request
  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const response = await fetch('/home/users');
        const result = await response.json();
        console.log('user informations are ', result);
        /* result is: {
          user: current user information,
          otherUsers: other users' information,
        } */
        setUserInformation(result.user);
        setOthersInformation(result.otherUsers);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };
    fetchInformation();
  }, []);

  // testing upload image
  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (err) => {
      console.log(err);
    };
    // console.log(e.target.files[0]);
    // setImage(e.target.files[0]);
  };

  // has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

  const handleImageSubmit = (e) => {
    e.preventDefault();
    console.log('image submit start');

    // const formData = new FormData();
    // formData.append('image', image);
    // fetch(BACKEND_URL + '/uploadImage', {
    //   method: 'POST',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log('uploadImage Error: ', err));

    fetch(BACKEND_URL + '/uploadImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ image }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('uploadImage Error: ', err));
    /**
     * uploadImage Error:  yntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
     */
  };

  return (
    <>
      <div className='feedDisplay'>
        <p>This is FeedDisplay</p>
        <p>User Information: {JSON.stringify(userInformation)}</p>
        <p>Other Users Information: {JSON.stringify(othersInformation)}</p>

        {/* testing upload image */}
        <input
          type='file'
          name='avatar'
          accept='image/*'
          onChange={handleImageChange}
        />
        <button
          className='feedbtn'
          onClick={handleImageSubmit}
          width={50}
          height={50}
        >
          Upload
        </button>
        {image === '' || image === null ? (
          ''
        ) : (
          <img width={100} height={100} src={image} />
        )}
        {/* testing upload image */}

        <Feed />
      </div>
    </>
  );
};

export default FeedDisplay;
