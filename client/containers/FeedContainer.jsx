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

import React from "react";
import API from "../containers/API.jsx";
import FeedDisplay from "../components/FeedDisplay.jsx";

const FeedContainer = () => {
  return (
    <>
      <div className="feedDisplay">
        <p>This is FeedConatiner</p>
        <API />
        <FeedDisplay />
      </div>
    </>
  );
};

export default FeedContainer;
