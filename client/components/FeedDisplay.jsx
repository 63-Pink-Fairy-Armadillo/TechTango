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
import { motion } from 'framer-motion';

const FeedDisplay = () => {
  /*--------------------------------------- React Hooks ---------------------------------------*/
  const [userInformation, setUserInformation] = useState([]);

  // Send Fetch User Information request
  useEffect(() => {
    fetchInformation();
  }, []);
  /*--------------------------------------- Feed Function ---------------------------------------*/
  const fetchInformation = async () => {
    try {
      const response = await fetch('/home/users');
      const result = await response.json();
      /* result is: [{ user: current user information }] */
      setUserInformation(result.user);

      // setOthersInformation(result.otherUsers);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  return (
    <>
      <div className='feedDisplay'>
        {userInformation.map((el, i) => (
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: i * 0.3 }}
            key={i}
          >
            <Feed userInformation={el} key={i} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FeedDisplay;
