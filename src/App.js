import React from 'react';
import { FaRegClipboard } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import Box from './Components/Box';
import Profile from './Components/Profile';
import Search from './Components/Search';
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-[300px] bg-purple-700 md:h-screen flex flex-col" >
        <ul className=" flex flex-col justify-center mt-40">
          <li className='font-bold text-white py-3 px-4 bg-purple-800 flex items-center'>
            <FaRegClipboard className="mr-2" />
            Candidate Traking
          </li>
          <li className='font-bold text-white py-3 px-4 bg-purple-600 flex items-center'>
            <IoTimeOutline className="mr-2" />
            History
          </li>
        </ul>
        <div className="mt-auto mb-4 px-4">
          <button className="w-full bg-white text-purple-700 font-bold py-2 px-4 rounded">
            Support
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center p-4 md:p-8">
        <div className="w-full max-w-3xl">
          <Profile />
        </div>
        <div className="mt-5 text-2xl md:text-4xl font-semibold text-center">
          Track Candidate Status
        </div>
        <div className="w-full max-w-3xl mt-6">
          <Search />
        </div>
        <div className="w-full max-w-3xl mt-6 bg-slate-300 p-6 md:p-10 rounded-2xl">
          <Box />
        </div>
      </div>
    </div>
  );
};

export default App;