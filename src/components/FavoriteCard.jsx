import React from "react";

const FavoriteCard = () => {
  return (
    <>
      <div className="relative">
        <div className="h-44 w-36 flex flex-col justify-between">
          <img className="w-full h-full" src="/assets/images/loveworldsingers.jpg"/>
          <h1 className="text-white font-bold text-sm mt-2">God of Have & Earth</h1>
          <small className="text-white font-normal text-xs opacity-50">Loveworld Singers</small>
        </div>
      </div>
    </>
  );
};

export default FavoriteCard;
