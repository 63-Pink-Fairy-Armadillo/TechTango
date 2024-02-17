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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginContainer from './containers/LoginContainer.jsx';
import Signup from './containers/SignupContainer.jsx';
// import MainContainer from './containers/MainContainer.jsx';

{/* <Route path="/home" element={<MainContainer />} /> */}

// <Route path="/signup" element={< SignupContainer />} />

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginContainer />} />

      </Routes>
    </Router>
  );
}

export default App;
