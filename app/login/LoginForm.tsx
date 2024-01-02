import { useState } from 'react';

const LoginForm: React.FC = () => {

  return (
    <form className='flex flex-col shadow-2xl drop-shadow-2xl rounded-md w-auto items-center justify-center h-auto from-emerald-800 bg-gradient-to-r to-sky-900'>
      <p className='text-2xl p-8 '>Inmersive Experience</p>
      <div>
        <input
          type="text"
          id="username"
          placeholder='Username'
          className='bg-transparent py-1'
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder='Password'
          className='bg-transparent border-y-2 py-1'
        />
      </div>
      <div className='flex w-full h-auto justify-between mt-2 p-1 align-middle text-sm px-14 py-5'>
      <button type="submit" className='border-2 py-1 rounded-md px-4'>Login</button>
      <p className='py-1 '>
        Forgot?
      </p>

      </div>
    </form>
  );
};

export default LoginForm;
