import React from "react";
import { Input } from "@mui/material";
import Bell from "../components/icons/Bell";

const Header = () => {
  return (
    <div className="flex">
      <div className="w-[70%] flex justify-center items-center relative">
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden">
          <svg
            className="absolute z-10 left-4 opacity-50"
            width="15"
            height="15"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
              stroke="white"
              stroke-opacity="0.65"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <input
            class=" px-10 bg-[#1C1C1C] h-full w-full outline-none text-sm rounded-full inputrounded pr-2"
            type="text"
            id="search"
            placeholder="Search, Songs, Genre, Album, Artists..."
          />
        </div>
      </div>
      <div className="w-[30%]">
        <div className="flex justify-center md:justify-end items-center h-full gap-3">
          <Bell />
          <img
            src="./src/assets/images/album-cover-6.png"
            className="border-2 border-[#F3777D] w-8 h-8 rounded-full"
          />
          <div className="hidden md:block font-bold text-xs text-white">Raymond</div>
          <svg
            width="12"
            height="8"
            className="hidden md:block"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6667 1.66666L6.00004 6.33332L1.33337 1.66666"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
