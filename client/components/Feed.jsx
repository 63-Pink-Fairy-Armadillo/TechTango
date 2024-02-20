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
  const { username, personal_bios, hashtag } = userInformation;
  const [tags, setTags] = useState([
    '#InnovatonNation',
    '#JavaScriptJourney',
    '#HTMLHeroes',
  ]);
  const [clicks, setClicks] = useState([false, false, false]);
  const [scope, animate] = useAnimate();

  /*--------------------------------------- Feed Function ---------------------------------------*/
  const valueClick = async (index) => {
    if (!clicks[index]) {
      const updatedClicks = [...clicks];
      updatedClicks[index] = true;
      setClicks(updatedClicks);
      hashtag[`tag${index + 1}`]++;

      await animate(`#tag${index}`, { y: -25 });
      await animate(`#tag${index}`, { y: 0 });
      await animate(`#tag${index}`, { opacity: 0.5 });
      await animate(`#tag${index}`, { opacity: 1 });
    } else {
      const updatedClicks = [...clicks];
      updatedClicks[index] = false;
      setClicks(updatedClicks);
      hashtag[`tag${index + 1}`]--;

      await animate(`#tag${index}`, { y: 20 });
      await animate(`#tag${index}`, { y: 0 });
      await animate(`#tag${index}`, { opacity: 0.5 });
      await animate(`#tag${index}`, { opacity: 1 });
    }

    // Fetch Patch to update database
    const body = {
      tags: hashtag,
      name: username,
    };

    fetch('/home/editTags', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((data) => {
        // Got response from server
        console.log(data);
      })
      .catch((err) => console.log('fetch editTags PATCH ERROR: ', err));
  };

  return (
    <div className='feed' ref={scope}>
      <div className='feedleft'>
        <img
          className='feedimg'
          src={`/images/${username}.png`}
          alt={username}
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
              <button className='tagbtn' onClick={() => valueClick(i)}>
                {tag}
              </button>
              <button
                id={`tag${i}`}
                className={clicks[i] ? 'value-clicked' : 'value'}
                onClick={() => valueClick(i)}
              >
                {hashtag[`tag${i + 1}`]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
