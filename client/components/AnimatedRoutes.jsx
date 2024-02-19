import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LoginContainer from '../containers/LoginContainer.jsx';
import SignupContainer from '../containers/SignupContainer.jsx';
import MainContainer from '../containers/MainContainer.jsx';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LoginContainer />} />
        <Route path='/signUp' element={<SignupContainer />} />
        <Route path='/home' element={<MainContainer />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
