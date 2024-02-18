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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer.jsx";
import SignupContainer from "./containers/SignupContainer.jsx";
import MainContainer from "./containers/MainContainer.jsx";

/**
  App
  |-- LoginContainer
  |-- SignupContainer
  |-- MainContainer
      |-- NavBar
      |-- FeedContainer
          |-- API/Joke on the left
          |—- FeedDisplay (do the array to populate all feeds)
              |—- Feed (name, pic, quote, #tag)
 */

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/signUp" element={<SignupContainer />} />
        <Route path="/home" element={<MainContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
