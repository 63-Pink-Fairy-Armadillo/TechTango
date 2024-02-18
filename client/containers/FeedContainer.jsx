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
import API from "../components/API.jsx";
import FeedDisplay from "../components/FeedDisplay.jsx";

const FeedContainer = () => {
  return (
    <>
      <div className="container-feed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, animi
          fugit ipsam, iure quisquam atque accusantium impedit placeat, minus
          iusto adipisci omnis veniam cum eos minima unde ad excepturi ipsum.
        </p>
        <API />
        <FeedDisplay />
      </div>
    </>
  );
};

export default FeedContainer;
