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
  const [text, setText] = useState('');
  const url = 'https://alien-pickup-line.p.rapidapi.com/alien_pickup_line';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '71044ec259mshc583b240f639463p13518bjsn2f93a7631bd2',
      'X-RapidAPI-Host': 'alien-pickup-line.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setText(result.pickup_line);
        console.log('text is ', text);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return <div className='api'>{text}</div>;
};

export default API;
