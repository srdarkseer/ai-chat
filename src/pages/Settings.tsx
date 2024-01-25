import React, { useState } from "react";
import { Switch } from "../components/ui/switch";
import { Button } from "./../components/ui/button";

import { FiEdit, FiArrowUpRight } from "react-icons/fi";
import { MdKeyboardArrowDown, MdEditSquare } from "react-icons/md";
import { GrHelpBook } from "react-icons/gr";
import { HiOutlinePaintBrush } from "react-icons/hi2";

import pro from "./../assets/images/pro.png";

const Settings = () => {
  const handleEditAvatar = () => {
    console.log("Edit avatar clicked");
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="border-b border-slate-300 py-4 flex justify-center">
        <div className="max-w-2xl w-full py-0.5 flex justify-center">
          <h1 className="font-semibold text-3xl">Settings</h1>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center py-5">
        <div className="flex flex-col gap-5 max-w-2xl w-full">
          <div className="border-b border-slate-300 py-3">
            <h2 className="text-xl font-bold">Account</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl w-full">
            <div className="divide-y divide-gray-200">
              <div className="py-4 flex justify-between items-center">
                <span className="text-gray-700">Avatar</span>
                <div className="relative">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="User Avatar"
                    className="h-16 w-16 rounded-full"
                  />
                  <Button
                    onClick={handleEditAvatar}
                    className="absolute bottom-0 right-[-2px] bg-white p-0 h-7 w-7"
                    variant="ghost"
                    size="icon"
                  >
                    <MdEditSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="py-4 flex justify-between items-center">
                <span className="text-gray-700">Username</span>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-900 text-sm font-semibold">
                    srdarkseer
                  </span>
                  <Button variant="ghost" size="icon">
                    <FiEdit />
                  </Button>
                </div>
              </div>

              <div className="py-4 flex justify-between items-center">
                <span className="text-gray-700">Email</span>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-900 text-sm">
                    srdarkseer@gmail.com
                  </span>
                </div>
              </div>

              <div className="py-4 flex justify-between items-center">
                <span className="text-gray-700">Change Password</span>
                <Button variant="ghost" size="icon">
                  <FiEdit />
                </Button>
              </div>

              <div className="py-4 flex justify-between items-center">
                <span className="flex flex-col gap-2">
                  <span className="text-gray-700">AI Data Usage</span>
                  <p className="text-gray-500 text-sm max-w-sm">
                    This feature allows us to use your search data to improve
                    our AI models. Turn this setting off if you wish to exclude
                    your data from this process.
                  </p>
                </span>
                <Switch />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-2xl w-full">
          <div className="border-b border-slate-300 py-3 flex items-center gap-2">
            <h2 className="text-xl font-bold">QuickGPT</h2>
            <img src={pro} alt="pro" className="w-7 h-5" />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md  w-full">
            <div className="divide-y divide-gray-200">
              <div className="py-4 flex justify-between items-center">
                <span className="text-gray-700">Subscription</span>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex gap-2 items-center"
                  >
                    <FiArrowUpRight /> Learn more
                  </Button>
                </div>
              </div>

              <div className="py-4 flex justify-between items-center">
                <span className="text-gray-700">AI Model</span>
                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    variant="disabled"
                    className="flex gap-2 items-center"
                  >
                    Default <MdKeyboardArrowDown />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-2xl w-full mt-4">
          <div className="bg-white p-6 rounded-xl shadow-md  w-full flex justify-between">
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="ghost"
                className="flex gap-2 items-center"
              >
                <GrHelpBook /> Help & FAQ
              </Button>

              <Button
                size="sm"
                variant="ghost"
                className="flex gap-2 items-center"
              >
                <HiOutlinePaintBrush /> Give us feedback
              </Button>
            </div>

            <div className="flex gap-1">
              <Button size="sm" variant="ghost">
                Sign Out
              </Button>

              <Button size="sm" variant="ghost">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
