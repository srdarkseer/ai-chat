import React from "react";
import { Outlet } from "react-router-dom";

// MATERIAL-UI

// ============================|| BLANK LAYOUT ||============================ //

const Blank: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Blank;
