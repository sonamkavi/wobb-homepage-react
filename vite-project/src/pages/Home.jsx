import React from "react";
import CampaignList from "../components/CampaignList";

const Home = () => {
  return (
    <div>
      <CampaignList />
      <footer className="text-center bg-gray-800 text-white py-4 mt-6">
        © 2025 Wobb. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
