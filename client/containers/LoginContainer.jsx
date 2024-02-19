/**
 * ************************************
 *
 * @module  LoginContainer
 * @author
 * @date
 * @description Container for Login
 *
 * ************************************
 */

import React from 'react';
import { motion } from 'framer-motion';

const LoginContainer = () => {
  const createAccount = () => {
    window.location.href = '/signUp';
  };

  return (
    <motion.div
      className='container'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
    >
      <section className='title'>
        <span className='first'>Tech</span>
        <span className='slide'>
          <span className='second'>Tango</span>
        </span>
      </section>
      <form className='login-form' method='POST' action='/'>
        <div className='login-input'>
          <label htmlFor='username'>Username: </label>
          <input
            name='username'
            type='text'
            id='username'
            placeholder='Username'
            required
          />
        </div>
        <div className='login-input'>
          <label htmlFor='password'>Password: </label>
          <input
            name='password'
            type='password'
            id='password'
            placeholder='Password'
            required
          />
        </div>
        <input
          className='login-submit'
          type='submit'
          id='login-button'
          value='Login'
        />
      </form>
      <section className='register'>
        <input
          className='register-button'
          type='submit'
          id='register-button'
          value='Create an account?'
          action='/signUp'
          onClick={createAccount}
        />
      </section>
    </motion.div>
  );
};

export default LoginContainer;
