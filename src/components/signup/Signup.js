import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import requestLogin from '../../helpers/logUserIn';
import requestRegisterUser from '../../helpers/registerUser';
import { useForm } from 'react-hook-form';
import { logUserIn } from '../../features/users/userSlice';
import logo from '../../assets/afrilogo.png';
import Hand from '../../assets/hand.png';
import FormError from '../FormError';

import './signup.css';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [onFormSubmitMessage, setOnFormSubmitMessage] = useState('');

  const onSubmit = async (data) => {
    const body = JSON.stringify(data);

      if (data.password !== data.passwordConfirm) {
        setOnFormSubmitMessage('Passwords do not match');
        return;
      }

      const user = await requestRegisterUser(body);
      if (!user) {
        setOnFormSubmitMessage('User already registered!');
        return;
      }

      const { token } = await requestLogin(body);
      localStorage.setItem('token', token);
      dispatch(logUserIn(user));
    
  };
  
  return (
    <>
      {/*
      This Login requires updating your template:

      ```
      <html class="h-full bg-gray-50">
      <body class="h-full">
      ```
    */}
      {onFormSubmitMessage && (
        <div
          className='fixed py-3 pl-4 pr-10 text-orange-700 translate-x-1/2 bg-orange-100 border border-orange-400 rounded top-4 right-1/2'
          role='alert'
        >
          <span className='block sm:inline'>{onFormSubmitMessage}</span>
          <span
            role='button'
            tabIndex={0}
            onClick={() => {
              setOnFormSubmitMessage('');
            }}
            onKeyDown={() => {
              setOnFormSubmitMessage('');
            }}
            className='absolute top-0 bottom-0 right-0 px-4 py-3'
          >
            <svg
              className='w-6 h-6 text-orange-500 fill-current'
              role='button'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <title>Close</title>
              <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
            </svg>
          </span>
        </div>
      )}

      <div className='elements'>
        <div className='flex items-center content-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8'>
          <div className='w-full max-w-md px-6 py-4 space-y-8'>
            <div>
              <img className='w-auto h-20 mx-auto' src={logo} alt='Workflow' />
              <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
                Create your account
              </h2>
              <p className='mt-2 text-sm text-center text-gray-600'>
                Kindly,
                <a
                  href='https://www.microverse.org/info/terms#:~:text=Microverse%20does%20not%20knowingly%20collect,individual%20and%20is%20non%2Dtransferrable.'
                  className='font-medium text-lime-600 hover:text-lime-700'
                >
                  read our terms and conditions to continue!
                </a>
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='mt-8 space-y-6 login-form'
              action='#'
              method='POST'
            >
              <input type='hidden' name='remember' defaultValue='true' />
              <div className='-space-y-px rounded-md shadow-sm'>
                <div>
                  <label htmlFor='email-address' className='sr-only'>
                    Email address
                  </label>
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    {...register('email', { required: true, maxLength: 50 })}
                    autoComplete='email'
                    className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-green-500 focus:border-gray-500 focus:z-10 sm:text-sm'
                    placeholder='Email address'
                  />
                  {errors.email?.type === 'required' && (
                    <FormError>Please input the email</FormError>
                  )}
                </div>
                <div>
                  <label htmlFor='password' className='sr-only'>
                    Password
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    {...register('password', { required: true, minLength: 6 })}
                    autoComplete='current-password'
                    className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm'
                    placeholder='Password'
                  />
                  {errors.password?.type === 'minLength' && (
                    <FormError>
                      Password must be at least 6 characters long.
                    </FormError>
                  )}
                  {errors.password?.type === 'required' && (
                    <FormError>Please input the required password</FormError>
                  )}
                </div>
                <div>
                  <label htmlFor='password' className='sr-only'>
                    Confirm Password
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    {...register('passwordConfirm', {
                      required: true,
                      maxLength: 50,
                    })}
                    autoComplete='current-password'
                    className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm'
                    placeholder='Confirm Password'
                  />
                  {errors.passwordConfirm?.type === 'required' && (
                    <FormError>Please input the password to confirm</FormError>
                  )}
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='w-4 h-4 text-gray-700 border-gray-300 rounded focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='remember-me'
                    className='block ml-2 text-sm text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-blue-700 hover:text-gray-300'
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <LockClosedIcon
                      className='w-5 h-5 text-white group-hover:text-green-600'
                      aria-hidden='true'
                    />
                  </span>
                  Signup
                </button>

                <div className='text-sm'>
                  <Link className='' to='/login'>
                    <p
                      href='#'
                      className='font-medium text-blue-700 hover:text-gray-300 link-to-signup'
                    >
                      already a member? Login
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

// Signup.propTypes = {
//   isLogin: PropTypes.bool,
// };

export default Signup;
