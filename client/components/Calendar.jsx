/**
 * ************************************
 *
 * @module  Calendar
 * @author
 * @date
 * @description Calendar components PopUp
 *
 * ************************************
 */

import React from 'react';

const Calendar = (props) => {
  return props.trigger ? ( // if trigger true popup!
    <div className='popup'>
      <div className='popup-inner'>
        <h2 className='popuptitle'>Your Cohort Schedule</h2>
        <iframe
          src='https://calendar.google.com/calendar/embed?src=c_be70c6f683e72721145d9bbefc103afef5a73499c8283478e3a93960e2839a46%40group.calendar.google.com&ctz=America%2FChicago'
          style={{ border: 0 }}
          width='1200'
          height='800'
          frameborder='0'
          scrolling='no'
        ></iframe>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    '' // else return nothing
  );
};

export default Calendar;
