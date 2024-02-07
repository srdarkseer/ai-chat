import React from "react";
import FileUpload from "./components/FileUpload";

const Upload = () => {
  return (
    <div className="flex h-screen">
      <div
        className={`px-40 py-10 flex-1 flex flex-col bg-gray-100 transition-all duration-300`}
      >
        <FileUpload />
      </div>
    </div>
  );
};

export default Upload;
