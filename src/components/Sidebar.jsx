import React from "react";
import Download from "./icons/Download";
import Favorites from "./icons/Favorites";
import Home from "./icons/Home";
import Library from "./icons/Library";
import Logo from "./icons/Logo";
import Logout from "./icons/Logout";
import Search from "./icons/Search";

const Sidebar = () => {
  return (
    <>
      <div className="max-w-[118px] w-full h-screen hidden md:flex flex-col justify-between items-center border-gray-200 bg-sidebar">
        <div className="fixed h-screen">
          <div className="flex flex-col h-full gap-10 justify-center items-center m-auto">
            <div className="flex items-center mt-10">
              <Logo />
            </div>
            <div className="flex flex-col flex-grow overflow-y-auto gap-16">
                <a
                  href="#"
                  className="active group flex items-center py-2 text-sm font-medium"
                >
                  <Home />
                </a>
                <a
                  href="#"
                  className="group flex items-center py-2 text-sm font-medium rounded-md"
                >
                  <Favorites />
                </a>
                <a
                  href="#"
                  className="group flex items-center py-2 text-sm font-medium rounded-md"
                >
                  <Library />
                </a>
                <a
                  href="#"
                  className="group flex items-center py-2 text-sm font-medium rounded-md"
                >
                  <Download />
                </a>
                <a
                  href="#"
                  className="group flex items-center py-2 text-sm font-medium rounded-md"
                >
                  <Search />
                </a>
            </div>
            <div className="flex-end flex mb-10">
              <a
                href="#"
                className="group flex items-center py-2 text-sm font-medium rounded-md"
              >
                <Logout />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
