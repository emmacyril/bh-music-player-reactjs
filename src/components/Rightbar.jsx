import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import TopScreams from "./TopScreams";

const Rightbar = () => {
  return (
    <div className="max-w-[308px] w-full h-screen hidden md:flex flex-1 flex-col bg-[#131313] p-3">
      <div className="fixed h-screen mr-4">
        <div className="w-full h-[55%] flex flex-col">
          <div className="flex">
            <span className="flex flex-1 items-center px-2 font-bold text-white">
              Top Streams
            </span>
            <div className="topscreenbtndiv gap-4 justify-between p-1">
              <span className="bg-[#F3777D] text-white px-3 py-1">Local</span>
              <span className="text-white p-1">Global</span>
            </div>
          </div>

          <div className="scrolling-area max-h">
            <div class="scrolling-element-inside">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((top50) => (
                <TopScreams />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col mt-9">
            <span className="flex items-center px-2 font-bold text-white -mt-1 pb-1">
              Now Playing
            </span>
            <div className="playerbg flex flex-col justify-center items-center">
              <div className="text-[14px] text-white font-bold">Great God</div>
              <div className="text-[12px] text-slate-200 opacity-50">Love World Singers</div>

              <AudioPlayer
                autoPlay
                src="http://example.com/audio.mp3"
                onPlay={(e) => console.log("onPlay")}
                // other props here
              />
            </div>
            <div className="relative">
              <div className="absolute h-full w-full bg-black opacity-60" />
              <img
                className="rounded-[10px]"
                src="/assets/images/loveworldsingers.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
