import React from "react";

const Box = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <div className="w-full flex-col h-[150px] border-2 border-black bg-white rounded-2xl flex justify-center items-center">
        <h2 className="font-bold">Infosys</h2>
        <p className="text-green-500 font-bold ">Final Round</p>
      </div>
      <div className="w-full flex-col h-[150px] border-2 border-black bg-white rounded-2xl flex justify-center items-center">
      <h2 className="font-bold">Infosys</h2>
      <p className="text-yellow-400 font-bold ">Wait for final result</p>
      </div>
      <div className="w-full flex-col font-bold h-[150px] border-2 border-black bg-white rounded-2xl flex justify-center items-center">
      <h2 className="font-bold">Microsoft</h2>
      <p className="text-red-400 font-bold ">Screening Round</p>
      </div>
      <div className="w-full flex-col font-bold h-[150px] border-2 border-black bg-white rounded-2xl flex justify-center items-center">
      <h2 className="font-bold">Adobe</h2>
      <p className="text-green-400 font-bold ">Final Round</p>
      </div>
    </div>
  );
};

export default Box;
