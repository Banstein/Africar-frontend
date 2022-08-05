import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/solid';
import { ToastContainer, toast } from 'react-toastify';
import requestLogin from '../../helpers/logUserIn';
import requestRegisterUser from '../../helpers/registerUser';
import { logUserIn } from '../../features/users/userSlice';
import logo from '../../assets/afrilogo.png';
import SnipperLoginBtn from '../loaders/snipper';
import FormError from '../FormError';
import Vehicle from '../../assets/fille.png';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [onFormSubmitMessage, setOnFormSubmitMessage] = useState('');

  const { state } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, '4000');

    const body = JSON.stringify(data);
    const { user, token } = await requestLogin(body);
    if (!(user && token)) {
      toast.error('User was not found in our database', {
        position: 'top-right',
        autoClose: '2000',
      });
      return;
    }
    localStorage.setItem('token', token);
    dispatch(logUserIn(user));
    navigate(state?.path || '/');

    toast.success('User logged in succefully', {
      position: 'top-right',
      autoClose: '2000',
    });
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
          className="fixed py-3 pl-4 pr-10 text-orange-700 translate-x-1/2 bg-orange-100 border border-orange-400 rounded top-4 right-1/2"
          role="alert"
        >
          <span className="block sm:inline">{onFormSubmitMessage}</span>
          <span
            role="button"
            tabIndex={0}
            onClick={() => {
              setOnFormSubmitMessage('');
            }}
            onKeyDown={() => {
              setOnFormSubmitMessage('');
            }}
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
          >
            <svg
              className="w-6 h-6 text-orange-500 fill-current"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <ToastContainer />

      <div className="flex">
        <div className="flex justify-between w-screen vehicle-image">
          <div className="flex w-full h-full col-auto girl-image">
            <img src={Vehicle} className="object-cover w-8/12 h-50" />
          </div>
        </div>
        <div className="absolute flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8 ">
            <div>
              <img className="w-auto h-20 mx-auto" src={logo} alt="Workflow" />
              <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                Login to your account
              </h2>
              <p className="mt-2 text-sm text-center text-gray-600">
                Kindly,
                {' '}
                <a
                  href="https://www.microverse.org/info/terms#:~:text=Microverse%20does%20not%20knowingly%20collect,individual%20and%20is%20non%2Dtransferrable."
                  className="font-medium text-lime-600 hover:text-lime-700"
                >
                  read our terms and conditions to continue!
                </a>
              </p>
            </div>
            <form
              className="mt-8 space-y-6 login-form"
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    {...register('email', { required: true, maxLength: 50 })}
                    autoComplete="email"
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-green-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                  {errors.email?.type === 'required' && (
                    <FormError>PLease provide a valid email</FormError>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    {...register('password', { required: true, minLength: 6 })}
                    autoComplete="current-password"
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  {errors.password?.type === 'minLength' && (
                    <FormError>
                      Password too easy! At least 6 characters.
                    </FormError>
                  )}
                  {errors.password?.type === 'required' && (
                    <FormError>Please provide your password</FormError>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-gray-700 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-2 text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-700 hover:text-gray-300"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <SnipperLoginBtn
                  loading={isLoading}
                  title="Login"
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="w-5 h-5 text-white group-hover:text-green-600"
                      aria-hidden="true"
                    />
                  </span>
                  Login
                </SnipperLoginBtn>

                <div className="text-sm">
                  <Link className="" to="/signup">
                    <p
                      href="#"
                      className="font-medium text-blue-700 hover:text-blue-500 link-to-signup"
                    >
                      do not have an account? Signup
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
};

// Login.propTypes = {
//   isLogin: PropTypes.bool,
// };

// Login.defaultProps = {
//   isLogin: true,
// };

export default Login;
