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

// import React, { useState } from 'react';

// const Feed = () => {
// const { username, profile_pic, person
// /*----------------------  const [values, setValues] = useSta
//   te([10, 10, 10]);
// ,

//
// /*--------------------------------------- Feed Function ---------------------------------------*/

//    if (!clicks[index]) {
//     // Create a new array copy to avoid mutating state directly
//     const updatedClicks = [...clicks];
//     updatedClicks[index] = true;
//     setClicks(updatedClicks);
//     // Create a new array copy for values
// const updatedValues = [...values];
//     updatedValues[index]++;
//     setValues(updatedValues);
//   } else {
//     // Create a new array copy to avoid mutating state directly
// const updatedClicks = [...clicks];
//     updatedClicks[index] = false;
//     setClicks(updatedClicks);
//     // Create a new array copy for values
//     const updatedValues = [...values];
// updatedValues[index]--;
//     setValues(updatedValues);
//   }
// }
// return (
//   <div className='feed'>
//     <div className='feedleft'>
//       <img className='feedimg' src='./assets/profile-pic.jpeg' alt='Profile' />
//       <p c
//        lassName='feedUserna
//    m    e'>{username}</p>

//      <div className='feedbio'>
//       >{personal_bios}</p>
// Bio {personal_bios}{tags.
//       <hr />
//       <div className='feedtag'>
//         {tags.map((tag, i) => B           <div cl</p>e='bigtag' key={i}>
//             <button className='tagbtn'>{tag}</button>
//             <button className='value' onClick={() => valueClick(i)}>
//               {values[i]}
//             </button>
//           </div>
//         ))}map((tag, i) => (
//       </div>>
//   </div>
// );

import React, { useState } from 'react';

const Feed = ({ userInformation }) => {
  const { username, personal_bios } = userInformation;

  // Define states for tags, values, and clicks
  const [tags, setTags] = useState([
    '#InnovatonNation',
    '#JavaScriptJouurney',
    '#HTMLHeroes',
  ]);
  const [values, setValues] = useState([10, 10, 10]);
  const [clicks, setClicks] = useState([false, false, false]);

  const valueClick = (index) => {
    // Toggle clicks and update values
    if (!clicks[index]) {
      const updatedClicks = [...clicks];
      updatedClicks[index] = true;
      setClicks(updatedClicks);

      const updatedValues = [...values];
      updatedValues[index]++;
      setValues(updatedValues);
    } else {
      const updatedClicks = [...clicks];
      updatedClicks[index] = false;
      setClicks(updatedClicks);

      const updatedValues = [...values];
      updatedValues[index]--;
      setValues(updatedValues);
    }
  };

  return (
    <div className='feed'>
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
          <p>Bio {personal_bios}</p>
        </div>
        <hr />
        <div className='feedtag'>
          {tags.map((tag, i) => (
            <div className='bigtag' key={i}>
              <button className='tagbtn'>{tag}</button>
              <button className='value' onClick={() => valueClick(i)}>
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
