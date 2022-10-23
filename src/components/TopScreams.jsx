import React from "react";
import FavoritesSmall from "./icons/FavoritesSmall";
import Horizonalmorebtn from "./icons/Horizonalmorebtn";

const TopScreams = () => {
  return (
    <div className="grid grid-cols-1">
      <div class="flex border-b-[0.5px] border-[#313533] text-white ...">
        <div class="flex w-6 h-full text-[12px] justify-center items-center ...">
          01
        </div>
        <div class="grow h-14 ...">
          <div className="flex gap-2 h-full justify-start items-center">
            <img
              className="w-9 h-9 rounded-sm"
              src="/assets/images/album-cover-6.png"
            />

            <div className="flex flex-col">
              <div className="text-[12px] font-bold text-[#FAFAFA]">
                Mistletoe
              </div>
              <div className="text-[10px] text-[#AFB6B3]">Justin Bieber</div>
            </div>
          </div>
        </div>
        <div class="flex-none mb-2 h-14 ...">
          <div className="flex justify-center items-center gap-3 text-white h-full text-sm">
            <div className="">3:54</div>
            <FavoritesSmall />
            <Horizonalmorebtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopScreams;
