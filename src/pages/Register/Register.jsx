import React, { useEffect, useState } from 'react'
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [cell, setCell] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');

  function register(event) {
    event.preventDefault();
    axios.post("http://hypescreen.eu-4.evennode.com/users/signup", {
      firstName, lastName, cell, email, password
    }).then((res) => {
      console.log(res.data)
      if (res.status === 200) {
        navigate("/login");
      }

    }).catch((err) => {
      setError("email exists!");
    });
  }
  function moveToLogin(event) {
    event.preventDefault();
    navigate("/login");
  }
  return (

    <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up  Account
          </h2>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={register}>


            <div >
              <label htmlFor="emaifirstName" className="block text-sm font-medium leading-6 text-gray-900" >
                First Name
              </label>
              <div className="mt-2">
                <input
                  value={firstName} onChange={(event) => setFirstName(event.target.value)}
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="firstName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div >
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900" >
                lastName
              </label>
              <div className="mt-2">
                <input
                  value={lastName} onChange={(event) => setLastName(event.target.value)}
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="lastname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div >
              <label htmlFor="cell" className="block text-sm font-medium leading-6 text-gray-900" >
                Cell
              </label>
              <div className="mt-2">
                <input
                  value={cell} onChange={(event) => setCell(event.target.value)}
                  id="cell"
                  name="cell"
                  type="number"
                  autoComplete="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
                Sign Up
              </button>


            </div>

            <div className='suggestion__container'>
              <p>Already have an account ?</p><button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={moveToLogin}>Login</button>
            </div>

          </form>


        </div>
      </div>



      {/* ------- old code ---------------------}

      {/* 

      <div className='register__container'>

        <form className='register__form'>
          <h1 style={{ padding: 20 }}>Register</h1>
          <lable htmlFor="Frist Name"><input type="text" placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)} /></lable>
          <lable htmlFor='Last Name'><input type="text" placeholder='Last Name' value={lastName} onChange={(event) => setLastName(event.target.value)} /></lable>
          <lable htmlFor='Cell'><input type="text" placeholder='Cell' value={cell} onChange={(event) => setCell(event.target.value)} /></lable>
          <lable htmlFor='Email'><input type="text" placeholder='Email address' value={email} onChange={(event) => setEmail(event.target.value)} /></lable>
          <lable htmlFor='Password'><input type="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} /></lable>
          {
            error ? <p className='alert__box'>{error}</p> : ""
          }
          <button type="submit" className="register__btn" onClick={register}>Register</button>
          <div className='suggestion__container'>
            <p>Already have an account ?</p><button onClick={moveToLogin}>Login</button>
          </div>
        </form>
      </div> */}

    </>


  )
}

export default Register;