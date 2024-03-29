/**
 * ************************************
 *
 * @module  FeedContainer
 * @author
 * @date
 * @description Container for feeds
 *
 * ************************************
 */

import React from 'react';
import API from '../components/API.jsx';
import FeedDisplay from '../components/FeedDisplay.jsx';

const FeedContainer = () => {
  return (
    <>
      <div className='container-feed'>
        <API />
        <FeedDisplay />
      </div>
    </>
  );
};

export default FeedContainer;
