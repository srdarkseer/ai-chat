import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import FileUpload from "../../components/FileUpload";

const Upload = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-1 flex flex-col bg-gray-100 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <FileUpload />
      </div>
    </div>
  );
};

export default Upload;
