import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const Main: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 h-full flex">
      <div className="flex flex-col w-full">
        {location.pathname === "/ai/chat" && (
          <div
            className={` ${
              isSidebarOpen ? "ml-64" : "ml-16"
            } w-full transition-all duration-300 ease-in-out `}
          >
            <Topbar />
          </div>
        )}
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div
            className={` ${
              isSidebarOpen ? "ml-64" : "ml-16"
            } w-full transition-all duration-300 ease-in-out `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
