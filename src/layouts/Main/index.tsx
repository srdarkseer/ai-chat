import React, { useState } from "react";

// Project imports
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// ============================|| MAIN COMPONENT ||============================ //

const Main: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 h-full flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={` ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } w-full transition-all duration-300 ease-in-out `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
