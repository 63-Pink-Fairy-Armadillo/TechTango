/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes.jsx';

/**
  App
  |-- AnimatedRoutes
      |-- LoginContainer
      |-- SignupContainer
      |-- MainContainer
          |-- NavBar
              |-- Calendar
              |-- EditProfile
              |-- About
          |-- FeedContainer
              |-- API/Joke on the left
              |-- FeedDisplay (do the array to populate all feeds)
                  |-- Feed (name, pic, quote, #tag)
 */

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
