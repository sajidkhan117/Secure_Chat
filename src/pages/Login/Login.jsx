import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';
import Register from '../Register/Register';


function Login() {

  let navigate = useNavigate();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');

  function login(event) {
    event.preventDefault();
    axios({
      method: "post", url: "http://hypescreen.eu-4.evennode.com/users/signin", data: {
        email,
        password
      }
      , headers: {
        'Content-Type': 'application/json', 'Allow-Access-Origin': '*'
      }
    }).then((res) => {
      if (res.status === 200) {
        navigate('/home', { state: { user: res.data.user } });

      }
      console.log(res.data);
    }).catch((err) => {
      let status = err.message.match(/[0-9]/g).join("");
      let errorsAndResponses = { "404": "user not found!", "400": "email or password is not valid!" };
      setError(errorsAndResponses[`${status}`]);
    });



  }

  function moveToRegister(event) {
    event.preventDefault();
    navigate("/");
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in Account
          </h2>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={login}>

            <div >
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900" >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email} onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" >
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {
              error ? <p className='alert__box'>{error}</p> : ""
            }
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>

            <div className='suggestion__container'>
              <p>create an account</p><button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={moveToRegister}>Register</button>
            </div>
          </form>


        </div>
      </div>

      {/* -------------------- old code  ------------------------ */}
      {/* <div className='login__container'>
        <form className='login__form' onSubmit={login}>
          <h1>Login</h1>
          <label htmlFor='Email'><input placeholder='Enter your email address' type="text" value={email} onChange={(event) => setEmail(event.target.value)} /></label>
          <label htmlFor='Password'><input placeholder='Enter your password' type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
          {
            error ? <p className='alert__box'>{error}</p> : ""
          }
          <button type="submit" className="login__btn">Login</button>
        </form>
      </div> */}
    </>

  )
}

export default Login;