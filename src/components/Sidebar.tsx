import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // If you're using react-icons

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 transform bg-white shadow-md ${
        isOpen ? "translate-x-0" : "-translate-x-[75%]"
      } transition-transform duration-300 ease-in-out z-10`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="font-semibold text-xl">Sidebar</h2>
        <button
          onClick={toggleSidebar}
          className="text-xl rounded-full p-2 hover:bg-gray-200 focus:outline-none"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {/* Add sidebar content here */}
    </div>
  );
};

export default Sidebar;
