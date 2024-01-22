import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Plus, XCircle } from "lucide-react";
import { FaFilePdf, FaFileWord } from "react-icons/fa";

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      const validFiles = acceptedFiles.filter(
        (file) => file.size <= 10 * 1024 * 1024
      );
      setUploadedFiles([...uploadedFiles, ...validFiles]);
    },
  });

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith(".pdf")) {
      return <FaFilePdf className="w-6 h-6 text-red-600" />;
    } else if (fileName.endsWith(".doc") || fileName.endsWith(".docx")) {
      return <FaFileWord className="w-6 h-6 text-blue-600" />;
    } else {
      return null;
    }
  };

  return (
    <div className="grid grid-cols-10 gap-5">
      <div className="col-span-2">
        <div className="p-2 bg-white rounded-xl w-44 h-40">
          <div
            {...getRootProps({
              className:
                "w-full h-36 border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
              onClick: (event) => open(),
            })}
          >
            <input {...getInputProps()} />
            <>
              <Plus className="w-10 h-10 text-slate" />
              <p className="mt-2 text-sm text-slate-400">Drop files here</p>
            </>
          </div>
        </div>
      </div>

      {/* Display uploaded files */}
      {uploadedFiles.map((file, index) => (
        <div key={index} className="col-span-2 relative">
          <div className="p-2 bg-white rounded-xl w-44 h-40 flex justify-center items-center">
            <div className="flex flex-col gap-3 items-center p-4 bg-gray-50 rounded-xl w-full">
              {getFileIcon(file.name)}
              <span className="text-sm text-slate-500 truncate">
                {file.name}
              </span>
              <button
                onClick={() => handleRemoveFile(index)}
                className="absolute top-0 right-0 p-1 text-red-500 hover:text-red-600"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileUpload;
