/**
 * ************************************
 *
 * @module  API.jsx
 * @name  Alien-Pickup-Line
 * @link https://rapidapi.com/evanbose3/api/alien-pickup-line/
 * @description API/Joke
 *
 * ************************************
 */

import React from 'react';
import { useState, useEffect } from 'react';

const API = () => {
  /*--------------------------------------- React hooks ---------------------------------------*/
  const [text, setText] = useState('');
  const [line, setLine] = useState([]);
  const [index, setIndex] = useState(0); // index for line state array
  /* Fetch API on load */
  useEffect(() => {
    fetchData();
    console.log('index first load is ', index);
  }, []);
  /*--------------------------------------- Fetch API Function ---------------------------------------*/
  const url = 'https://alien-pickup-line.p.rapidapi.com/alien_pickup_line';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '71044ec259mshc583b240f639463p13518bjsn2f93a7631bd2',
      'X-RapidAPI-Host': 'alien-pickup-line.p.rapidapi.com',
    },
  };
  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setText(result.pickup_line);

      // Store text in line array
      if (index <= line.length) {
        const lineArray = line;
        lineArray.push(result.pickup_line);
        setLine(lineArray);
        setIndex(lineArray.length - 1); // set index to last elem
      }
      if (index === 2) alert("You're a bit desperate huh?");
      if (index === 5) alert("You're PAYING FOR THE API!");
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  /*--------------------------------------- Fetch API Function ---------------------------------------*/
  function nextClick() {
    if (index < line.length - 1) {
      let currentIndex = index + 1;
      document.getElementById(`bullet${index}`).style.color = 'white';
      document.getElementById(`bullet${currentIndex}`).style.color = 'red';
      setIndex(currentIndex);
      setText(line[currentIndex]);
      return; // return so won't fetch
    }
    fetchData();
    // change previous to white
    document.getElementById(`bullet${index}`).style.color = 'white';
  }

  function backClick() {
    if (index === 0) return alert('STOP IT HUMAN!');
    // move index back 1 & change colors
    let currentIndex = index - 1;
    document.getElementById(`bullet${index}`).style.color = 'white';
    document.getElementById(`bullet${currentIndex}`).style.color = 'red';
    setIndex(currentIndex);
    setText(line[currentIndex]);
  }

  return (
    <div className='api'>
      <blockquote>
        <p>{text}</p>
        <hr />
        <cite>Tech-Tango</cite>
      </blockquote>
      <div className='apiPage'>
        <div className='pageBullets'>
          {line.map((el, i) => (
            <p id={`bullet${i}`} style={{ color: 'red' }} key={i}>
              .
            </p>
          ))}
        </div>
      </div>
      <div className='buttonAPI'>
        <button className='btnAPIback' onClick={backClick}>
          Back
        </button>
        <button className='btnAPInext' onClick={nextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default API;
