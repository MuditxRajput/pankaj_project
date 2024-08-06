import React from "react";

const Box = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="w-full h-[150px] border-2 border-black bg-white rounded-2xl flex justify-center items-center">
        Infosys
      </div>
      <div className="w-full h-[150px] border-2 border-black bg-white rounded-2xl flex justify-center items-center">
        Google
      </div>
      <div className="w-full h-[150px] border-2 border-black bg-white rounded-2xl flex justify-center items-center">
        Microsoft
      </div>
      <div className="w-full h-[150px] border-2 border-black bg-white rounded-2xl flex justify-center items-center">
        Adobe
      </div>
    </div>
  );
};

export default Box;
