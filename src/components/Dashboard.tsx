import React from "react";
import AllMusicContainer from "./Music/AllMusicContainer";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <AllMusicContainer />
    </div>
  );
};

export default Dashboard;
