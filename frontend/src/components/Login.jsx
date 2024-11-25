import React, { useState } from 'react';
import Head from './Head';
import axios from "axios";
import { API_ENDPOINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/slice';
import store from '../redux/store';

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Correctly get loading state from store
  const isLoading = useSelector((store) => store.user.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    if (isLogin) {
      // Login
      const user = { email, pass };
      try {
        const res = await axios.post(`${API_ENDPOINT}/login`, user, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        console.log(res);
        if (res.data.success) {
          dispatch(setUser(res.data.user));
          toast.success(res.data.message);
          navigate("/browse");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Login failed");
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      // Register
      const user = { name, email, pass };
      try {
        const res = await axios.post(`${API_ENDPOINT}/register`, user, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        console.log(res);
        if (res.data.success) {
          setIsLogin(true);
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Registration failed");
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }

    // Clear the form
    setName("");
    setEmail("");
    setPass("");
  };

  return (
    <div>
      <Head />
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh]' src="https://francisboafo.github.io/images/movie.jpg" alt="bgimage" />
      </div>
      <form onSubmit={getInputData} className="flex flex-col items-center w-3/12 my-36 p-12 left-0 right-0 justify-center mx-auto absolute bg-black opacity-85 rounded-md">
        <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Sign up"}</h1>
        <div className='flex flex-col'>
          {!isLogin && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder='Enter Name'
              className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
            />
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
            className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
          />

          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder='Enter Password'
            className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
          />

          <button className='bg-red-700 mt-6 p-3 text-white rounded-sm font-md hover:bg-red-900'>
            {isLoading ? "Loading....." : isLogin ? "Login" : "Sign up"}
          </button>

          <p className='text-white mt-2'>
            {isLogin ? "New to Account?" : "Already have an account?"}
            <span onClick={loginHandler} className='ml-1 text-blue-800 font-medium cursor-pointer'>
              {isLogin ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
