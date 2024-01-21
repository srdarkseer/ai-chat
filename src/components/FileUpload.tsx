import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Inbox, XCircle } from "lucide-react"; // Import XCircle from lucide-react

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file.size > 10 * 1024 * 1024) {
        alert("File is too big! Please upload a file smaller than 10mb.");
        return;
      }
      setUploadedFile(file);
    },
  });

  const handleRemoveFile = () => {
    setUploadedFile(null); // Reset the uploadedFile state
  };

  return (
    <div className="p-2 bg-white rounded-xl">
      {uploadedFile ? (
        <div className="w-full flex justify-between items-center p-4 bg-gray-50 rounded-xl">
          <span className="text-sm text-slate-500">{uploadedFile.name}</span>
          <button
            onClick={handleRemoveFile}
            className="text-red-500 hover:text-red-600"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <div
          {...getRootProps({
            className:
              "w-full border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
            onClick: (event) => open(),
          })}
        >
          <input {...getInputProps()} />
          <>
            <Inbox className="w-10 h-10 text-slate" />
            <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
          </>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
