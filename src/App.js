import React from 'react';
import Box from './Components/Box';
import Profile from './Components/Profile';
import Search from './Components/Search';
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
    
      <div className="w-full md:w-[300px] bg-purple-500 md:h-screen">
      
      </div>
      <div className="flex-1 flex flex-col items-center p-4 md:p-8">
     
        <div className="w-full max-w-3xl">
          <Profile />
        </div>
       
        <div className="mt-10 text-2xl md:text-4xl font-semibold text-center">
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
