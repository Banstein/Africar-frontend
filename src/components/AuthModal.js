/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import requestLogin from '../helpers/logUserIn';
import requestRegisterUser from '../helpers/registerUser';
import { logUserIn } from '../features/users/userSlice';
import FormError from './FormError';
import PrimaryButton from './PrimaryButton';

const AuthModal = ({ isLogin = true, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { state } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [onFormSubmitMessage, setOnFormSubmitMessage] = useState('');

  const onSubmit = async (data) => {
    const body = JSON.stringify(data);

    if (isLogin) {
      const { user, token } = await requestLogin(body);

      if (!(user && token)) {
        setOnFormSubmitMessage('User not found');
        return;
      }
      localStorage.setItem('token', token);
      dispatch(logUserIn(user));
      navigate(state?.path || '/');
    } else {
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
    }
  };

  return (
    <div className='bg-white text-black w-[95%] max-w-md rounded-xl p-4 md:p-8'>
      <button
        type='button'
        className='font-bold text-amber-500'
        onClick={closeModal}
      >
        x
      </button>
      <h2 className='mb-4 font-bold text-center uppercase md:text-2xl'>
        {isLogin ? 'Login' : 'Sign up'}
      </h2>

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center gap-4 md:items-start md:gap-7'
      >
        {!isLogin && (
          <input
            type='text'
            {...register('username', { required: true, maxLength: 50 })}
            placeholder='username'
            className='w-full p-2 border rounded-sm'
          />
        )}
        {errors.username?.type === 'required' && (
          <FormError>Must provide a name</FormError>
        )}
        {/* <input
          type='email'
          {...register('email', { required: true, maxLength: 50 })}
          placeholder='Email'
          className='w-full p-2 border rounded-sm'
        />
        {errors.email?.type === 'required' && (
          <FormError>Must provide an email</FormError>
        )} */}
        <input
          type='password'
          {...register('password', { required: true, minLength: 6 })}
          placeholder='Password'
          className='w-full p-2 border rounded-sm'
        />
        {errors.password?.type === 'minLength' && (
          <FormError>Password must be at least 6 characters</FormError>
        )}
        {errors.password?.type === 'required' && (
          <FormError>Must provide a password</FormError>
        )}
        {!isLogin && (
          <input
            type='password'
            {...register('passwordConfirm', { required: true, maxLength: 50 })}
            placeholder='Confirm password'
            className='w-full p-2 border rounded-sm'
          />
        )}
        {errors.passwordConfirm?.type === 'required' && (
          <FormError>Must provide a password</FormError>
        )}
        <PrimaryButton btnType='submit'>
          {isLogin ? 'Login' : 'Sign up'}
        </PrimaryButton>
      </form>
    </div>
  );
};

AuthModal.propTypes = {
  isLogin: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};

AuthModal.defaultProps = {
  isLogin: true,
};

export default AuthModal;
