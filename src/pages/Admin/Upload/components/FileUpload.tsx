import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Plus, XCircle } from "lucide-react";
import { FaFilePdf, FaFileWord } from "react-icons/fa";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";

interface UploadedFileWithProgress {
  file: File;
  progress: number;
}

const FileUpload: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<
    UploadedFileWithProgress[]
  >([]);

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
      acceptedFiles.forEach((file) => {
        simulateFileUpload(file);
      });
    },
  });

  const simulateFileUpload = (file: File) => {
    const fileWithProgress: UploadedFileWithProgress = { file, progress: 0 };
    setUploadedFiles((prev) => [...prev, fileWithProgress]);
    const intervalId = setInterval(() => {
      setUploadedFiles((currentFiles) => {
        return currentFiles.map((f) => {
          if (f.file === file && f.progress < 100) {
            return { ...f, progress: f.progress + 10 };
          }
          return f;
        });
      });
      const uploadedFile = uploadedFiles.find((f) => f.file === file);
      if (uploadedFile && uploadedFile.progress >= 100) {
        clearInterval(intervalId);
      }
    }, 200);
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((currentFiles) =>
      currentFiles.filter((_, i) => i !== index)
    );
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith(".pdf")) {
      return <FaFilePdf className="w-6 h-6 text-red-600" />;
    } else if (fileName.endsWith(".doc") || fileName.endsWith(".docx")) {
      return <FaFileWord className="w-6 h-6 text-blue-600" />;
    }
    return null;
  };

  return (
    <div className="grid grid-cols-10 gap-5">
      <div className="col-span-2">
        <div className="p-2 bg-white rounded-xl w-44 h-40">
          <div
            {...getRootProps({
              className:
                "w-full h-36 border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
              onClick: () => open(),
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

      {uploadedFiles.map((uploadedFile, index) => (
        <div key={index} className="col-span-2">
          <div className="p-2 bg-white rounded-xl w-44 h-40 flex justify-center items-center relative">
            <div className="flex flex-col gap-3 items-center p-4 bg-gray-50 rounded-xl w-full">
              {getFileIcon(uploadedFile.file.name)}
              <span className="text-sm text-slate-500 truncate w-32">
                {uploadedFile.file.name}
              </span>
              {uploadedFile.progress < 100 ? (
                <Progress value={uploadedFile.progress} />
              ) : null}
              {uploadedFile.progress === 100 ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveFile(index)}
                  className="absolute top-0 right-0 p-1"
                >
                  <XCircle className="w-6 h-6 text-red-500" />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileUpload;
