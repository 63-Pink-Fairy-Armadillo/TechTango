import React from 'react';
import { motion } from 'framer-motion';

const login = () => {
  window.location.href = '/';
};

function SignupContainer() {
  return (
    <motion.div
      className='container-signup'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: 'window.innerWidth' }}
    >
      <section className='title-signup'>
        <span className='first'>Sign</span>
        <span className='slide'>
          <span className='second'>Up</span>
        </span>
      </section>
      <form className='register-form' method='POST' action='/signUp'>
        <div className='register-input'>
          <label htmlFor='username'>Username: </label>
          <input
            name='username'
            type='text'
            id='username'
            placeholder='Username'
            required
          />
        </div>
        <div className='register-input'>
          <label htmlFor='password'>Password: </label>
          <input
            name='password'
            type='password'
            id='password'
            placeholder='Password'
            required
          />
        </div>
        <div className='bio-input'>
          <label htmlFor='personal_bios'>About Yourself: </label>
          <textarea
            name='personal_bios'
            id='personal_bios'
            placeholder='Brief Introduction about you'
            rows='3'
          />
        </div>
        <input
          className='register-submit'
          type='submit'
          id='button'
          value='Create Account'
        />
      </form>
      <section className='register'>
        <input
          className='login-back'
          type='submit'
          value='Have an account?'
          onClick={login}
        />
      </section>
    </motion.div>
  );
}

export default SignupContainer;
