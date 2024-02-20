/**
 * ************************************
 *
 * @module  Feed
 * @author
 * @date
 * @description where feeds are made
 *
 * ************************************
 */

// #InnovationNation
// #JavaScriptJourney
// #HTMLHeroes
// #CSSMagic
// #GitGreatness
// #DebuggingDance
// #CtrlAltDelight
// #TechTangoTribe
// #InnovateTogether
// #DigitalDreamTeam

import React, { useState } from 'react';
import { useAnimate, motion, usePresence } from 'framer-motion';

const Feed = ({ userInformation }) => {
  /*--------------------------------------- React Hooks ---------------------------------------*/
  const { username, personal_bios } = userInformation;
  const [tags, setTags] = useState([
    '#InnovatonNation',
    '#JavaScriptJouurney',
    '#HTMLHeroes',
  ]);
  const [values, setValues] = useState([10, 10, 10]);
  const [clicks, setClicks] = useState([false, false, false]);
  const [scope, animate] = useAnimate();

  /*--------------------------------------- Feed Function ---------------------------------------*/
  const valueClick = async (index) => {
    // Toggle clicks and update values
    if (!clicks[index]) {
      const updatedClicks = [...clicks];
      updatedClicks[index] = true;
      setClicks(updatedClicks);

      const updatedValues = [...values];
      updatedValues[index]++;
      setValues(updatedValues);

      await animate(`#tag${index}`, { y: -25 });
      await animate(`#tag${index}`, { y: 0 });
      await animate(`#tag${index}`, { opacity: 0.5 });
      await animate(`#tag${index}`, { opacity: 1 });
    } else {
      const updatedClicks = [...clicks];
      updatedClicks[index] = false;
      setClicks(updatedClicks);

      const updatedValues = [...values];
      updatedValues[index]--;
      setValues(updatedValues);
      await animate(`#tag${index}`, { y: 20 });
      await animate(`#tag${index}`, { y: 0 });
      await animate(`#tag${index}`, { opacity: 0.5 });
      await animate(`#tag${index}`, { opacity: 1 });
    }
  };

  return (
    <div className='feed' ref={scope}>
      <div className='feedleft'>
        <img
          className='feedimg'
          src='./assets/profile-pic.jpeg'
          alt='Profile'
        />
        <p className='feedUsername'>{username}</p>
      </div>
      <div className='feedright'>
        <div className='feedbio'>
          <p>{personal_bios}</p>
        </div>
        <hr />
        <div className='feedtag'>
          {tags.map((tag, i) => (
            <div className='bigtag' key={i}>
              <button className='tagbtn'>{tag}</button>
              <button
                id={`tag${i}`}
                className={clicks[i] ? 'value-clicked' : 'value'}
                onClick={() => valueClick(i)}
              >
                {values[i]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
