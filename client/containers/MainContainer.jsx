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
import NavBar from "../components/NavBar.jsx";
import FeedContainer from "./FeedContainer.jsx";

const MainContainer = () => {
  return (
    <div className='container'>
      <h1 id='header'>This is MainContainer</h1>
      <NavBar />
      <FeedContainer/>
    </div>
  );
};

export default MainContainer;
