import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import logo from '../../assets/afrilogo.png';
import Hand from '../../assets/hand.png';

import './signup.css';

function Signup() {
  return (
    <>
      {/*
      This Login requires updating your template:

      ```
      <html class="h-full bg-gray-50">
      <body class="h-full">
      ```
    */}
      <div className="elements">
        <div className="flex items-center content-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md px-6 py-4 space-y-8">
            <div>
              <img className="w-auto h-20 mx-auto" src={logo} alt="Workflow" />
              <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-center text-gray-600">
                Kindly,
                <a
                  href="https://www.microverse.org/info/terms#:~:text=Microverse%20does%20not%20knowingly%20collect,individual%20and%20is%20non%2Dtransferrable."
                  className="font-medium text-lime-600 hover:text-lime-700"
                >
                  read our terms and conditions to continue!
                </a>
              </p>
            </div>
            <form className="mt-8 space-y-6 login-form" action="#" method="POST">
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
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-green-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  />
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
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="w-5 h-5 text-white group-hover:text-green-600"
                      aria-hidden="true"
                    />
                  </span>
                  Signup
                </button>

                <div className="text-sm">
                  <Link className="" to="/login">
                    <p
                      href="#"
                      className="font-medium text-blue-700 hover:text-gray-300 link-to-signup"
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

export default Signup;
