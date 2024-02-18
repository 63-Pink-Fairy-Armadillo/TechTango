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
import SignupContainer from './containers/SignupContainer.jsx';
// import MainContainer from './containers/MainContainer.jsx';

{/* <Route path="/home" element={<MainContainer />} /> */}

// 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/signup" element={< SignupContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
