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

import React from "react";
import NavBar from "../components/NavBar.jsx";
import FeedContainer from "./FeedContainer.jsx";

const MainContainer = () => {
  return (
    <>
      <div className="background-img">
        <section className="container-main">
          <NavBar />
          <FeedContainer />
        </section>
      </div>
    </>
  );
};

export default MainContainer;
