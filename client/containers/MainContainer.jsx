/**
 * ************************************
 *
 * @module  MainContainer.jsx
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar.jsx';
import FeedContainer from './FeedContainer.jsx';

const MainContainer = () => {
  return (
    <motion.div
      className='background-img'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
    >
      <section className='container-main'>
        <NavBar />
        <FeedContainer />
      </section>
    </motion.div>
  );
};

export default MainContainer;
