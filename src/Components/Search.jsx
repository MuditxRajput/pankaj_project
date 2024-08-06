import React from 'react';

const Search = () => {
  return (
    <div className='mt-10 w-full max-w-lg p-4 flex flex-col md:flex-row items-center justify-center'>
      <input
        type='text'
        className='w-full md:w-auto py-2 px-4 rounded-2xl outline-none border-2 border-black mb-2 md:mb-0'
        placeholder='Enter your email and mobile number..'
      />
      <button className='px-4 py-2 rounded-full outline-none border-2 border-black bg-blue-500 text-white hover:bg-blue-700'>
        Search
      </button>
    </div>
  );
};

export default Search;
