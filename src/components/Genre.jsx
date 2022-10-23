import React from "react";

const Genre = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 opacity-50 p-4 h-20 w-60 bg-[#210F32]">
          <h1 className="text-white text-base font-bold">Gospel</h1>
          <h3 className="text-white text-sm font-normal opacity-50">
            120k songs
          </h3>
        </div>
        <div className="h-40 w-60 bg-gradient-to-bl from-[#872C2F] to-[rgba(115, 31, 33, 0.55689)]"></div>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 opacity-50 p-4 h-20 w-60 bg-[#210F32]">
          <h1 className="text-white text-base font-bold">R & B</h1>
          <h3 className="text-white text-sm font-normal opacity-50">
            120 songs
          </h3>
        </div>
        <div className="h-40 w-60 bg-gradient-to-bl from-[#872C2F] to-[rgba(115, 31, 33, 0.55689)]"></div>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 opacity-50 p-4 h-20 w-60 bg-[#210F32]">
          <h1 className="text-white text-base font-bold">Rap</h1>
          <h3 className="text-white text-sm font-normal opacity-50">
            1k songs
          </h3>
        </div>
        <div className="h-40 w-60 bg-gradient-to-bl from-[#872C2F] to-[rgba(115, 31, 33, 0.55689)]"></div>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 opacity-50 p-4 h-20 w-60 bg-[#210F32]">
          <h1 className="text-white text-base font-bold">Hip-Hop</h1>
          <h3 className="text-white text-sm font-normal opacity-50">
            120 new songs
          </h3>
        </div>
        <div className="h-40 w-60 bg-gradient-to-bl from-[#872C2F] to-[rgba(115, 31, 33, 0.55689)]"></div>
      </div>
    </>
  );
};

export default Genre;
