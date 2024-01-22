import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBook,
  AiOutlineSetting,
} from "react-icons/ai"; // Import icons

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform bg-white shadow-md ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 ease-in-out z-10`}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center border-b">
        {isOpen && (
          <div className="flex items-center space-x-2">
            {/* Replace with your logo */}
            <span className="font-bold text-lg">Sidebar</span>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="text-xl rounded-full p-2 hover:bg-gray-200 focus:outline-none"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar Menu Items */}
      <div className={`flex-1 ${isOpen ? "pl-4 flex-col" : "justify-center"}`}>
        <div
          className={`py-4 flex ${
            isOpen ? "justify-start" : "justify-center"
          } items-center w-full`}
        >
          <AiOutlineHome className="text-gray-600" />
          {isOpen && (
            <span className="text-gray-800 text-sm font-medium pl-2">Home</span>
          )}
        </div>

        <div
          className={`py-4 flex ${
            isOpen ? "justify-start" : "justify-center"
          } items-center w-full`}
        >
          <AiOutlineSearch className="text-gray-600" />
          {isOpen && (
            <span className="text-gray-800 text-sm font-medium pl-2">
              Discover
            </span>
          )}
        </div>

        <div
          className={`py-4 flex ${
            isOpen ? "justify-start" : "justify-center"
          } items-center w-full`}
        >
          <AiOutlineBook className="text-gray-600" />
          {isOpen && (
            <span className="text-gray-800 text-sm font-medium pl-2">
              Library
            </span>
          )}
        </div>
      </div>

      {/* User Profile Section */}
      <div
        className={`absolute bottom-4 w-full flex ${
          isOpen ? "justify-between" : "justify-center"
        } items-center p-4`}
      >
        <div className="flex items-center space-x-2">
          <img
            src="https://github.com/shadcn.png"
            alt="User Avatar"
            className={`rounded-full w-10 ${isOpen ? "h-10" : "h-8"}`}
          />
          <p
            className={`text-gray-800 text-sm font-medium ${
              isOpen ? "block" : "hidden"
            }`}
          >
            srdarkseer
          </p>
        </div>

        {isOpen && (
          <button className="text-xl rounded-full p-2 hover:bg-gray-200 focus:outline-none">
            <AiOutlineSetting />
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;