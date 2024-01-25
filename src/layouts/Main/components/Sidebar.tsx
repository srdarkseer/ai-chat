import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineBook,
  AiOutlineSetting,
} from "react-icons/ai";
import { Button } from "../../../components/ui/button";

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
            <span className="font-bold text-xl">QuickGPT</span>
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
      <div className={`flex-1 ${isOpen ? "flex-col" : "justify-center"}`}>
        <Link
          to="/ai/chat"
          className={`py-4  flex ${
            isOpen ? "justify-start pl-4" : "justify-center"
          } items-center w-full focus:outline-none hover:bg-gray-200 transition duration-300`}
        >
          <AiOutlineSearch className="text-gray-600" />
          {isOpen && (
            <span className="text-gray-800 text-sm font-medium pl-2">
              Discover
            </span>
          )}
        </Link>

        <Link
          to="/ai/upload"
          className={`py-4 flex ${
            isOpen ? "justify-start pl-4 " : "justify-center"
          } items-center w-full focus:outline-none hover:bg-gray-200 transition duration-300`}
        >
          <AiOutlineBook className="text-gray-600" />
          {isOpen && (
            <span className="text-gray-800 text-sm font-medium pl-2">
              Library
            </span>
          )}
        </Link>
      </div>

      <div className="absolute bottom-4 flex flex-col gap-10">
        <div
          className={`px-4 py-2 bg-gray-100 mx-4 flex flex-col gap-3 rounded-lg text-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <span className="text-gray-800 text-sm font-medium">
            Upgrade Plan
          </span>
          <p className="text-gray-600 text-xs">
            Upgrade for image upload, smarter AI, and more Copilot.
          </p>
          <Button>Subscribe</Button>
        </div>

        {/* User Profile Section */}
        <div
          className={` w-full flex ${
            isOpen ? "justify-between" : "justify-center"
          } items-center p-4`}
        >
          <div className="flex items-center space-x-2">
            <img
              src="https://github.com/shadcn.png"
              alt="User Avatar"
              className={`rounded-full w-10 ${isOpen ? "h-10" : "h-8"}`}
            />
            {isOpen && (
              <span className="text-gray-800 text-sm font-medium">
                srdarkseer
              </span>
            )}
          </div>

          {isOpen && (
            <Link to="/ai/settings">
              <Button variant="ghost" size="icon">
                <AiOutlineSetting className="w-5 h-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
