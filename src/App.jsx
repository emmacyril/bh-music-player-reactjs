import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import {Sidebar, MusicPlayer, TopPlay, Rightbar } from "./components";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
  Discovery,
} from "./pages";

const App = () => {
  return (
    <div className="relative flex h-full bg-[#0D0C0F]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto hide-scrollbar bg-[#0D0C0F]">
        <div className="h-full flex xl:flex-row bg-[#0D0C0F]">
          <div className="container m-3 md:m-8">
            <Routes>
              <Route path="/" element={<Discovery />} />
            </Routes>
          </div>
        </div>
      </div>
      <Rightbar/>
    </div>
  );
};

export default App;
