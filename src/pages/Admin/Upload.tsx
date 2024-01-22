import React from "react";
import FileUpload from "../../components/FileUpload";

const Upload = () => {
  return (
    <div className="flex h-screen items-center">
      <div
        className={`px-10 flex-1 flex flex-col bg-gray-100 transition-all duration-300`}
      >
        <FileUpload />
      </div>
    </div>
  );
};

export default Upload;
