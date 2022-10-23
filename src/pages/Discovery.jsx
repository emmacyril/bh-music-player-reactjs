import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FavoriteCard, Genre, Header, TrendingNow } from "../components";

const Discovery = () => {
  return (
    <div className="flex flex-col flex-1 bg-[#0D0C0F] w-full h-full overflow-auto hide-scrollbar">
      <Header />
      <div className="flex flex-col mt-9">
        <div className="flex w-full">
          <span className="w-[60%] md:w-[90%] text-white text-base">Genre</span>
          <span className="w-[35%] md:w-[10%] flex justify-end text-[#F3777D] text-sm">
            View All
          </span>
        </div>
        <div className="overflow-auto hide-scrollbar max-w-full md:max-w-[1000px]">
          <div class="scrolling-element-inside">
            <div className="flex gap-5 md:gap-5 mt-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((top50) => (
                <Genre />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-9">
        <div className="flex w-full">
          <span className="w-[60%] md:w-[90%] text-white text-base">Trending Now</span>
          <span className="w-[35%] md:w-[10%] flex justify-end text-[#F3777D] text-sm">
            View All
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-4">
          <div className="overflow-auto hide-scrollbar max-h-[380px]">
            <div class="scrolling-element-inside">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((top50) => (
                <TrendingNow />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-9 mb-36 md:mb-10">
        <div className="flex w-full">
          <span className="w-[60%] md:w-[90%] text-white text-base">Favorites</span>
          <span className="w-[35%] md:w-[10%]  flex justify-end text-[#F3777D] text-sm">
            View All
          </span>
        </div>
        <div className="overflow-auto hide-scrollbar max-w-[1000px]">
          <div class="scrolling-element-inside">
            <div className="flex gap-5 mt-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((top50) => (
                <FavoriteCard />
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="w-full md:hidden">
          <div className="flex flex-col mt-9">
            <div className="playerbg flex flex-col justify-center items-center">
              <div className="text-[14px] text-white font-bold">Great God</div>
              <div className="text-[12px] text-slate-200 opacity-50">Love World Singers</div>

              <AudioPlayer
                autoPlay
                src="http://example.com/audio.mp3"
                onPlay={(e) => console.log("onPlay")}
                // other props here
              />
              <div className="text-center text-white opacity-20 p-1">© All rights reserved 2022</div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Discovery;
