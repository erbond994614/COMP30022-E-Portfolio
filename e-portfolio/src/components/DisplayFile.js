import React from "react";
import { useSelector } from "react-redux";

const DisplayFile = ({ fileId }) => {
  const files = useSelector((state) => {
    console.log("state.fileStore.files: ", state.fileStore.files);
    return state.fileStore.files;
  });

  return Object.keys(files).map((key) => (
    <div>
      {files[key].mimetype.includes("pdf") ? (
        <a
          download={files[key].name}
          href={`data:file/pdf;base64,${files[key].file}`}
        >
          Download This File
        </a>
      ) : (
        <img
          alt={files[key].name}
          src={`data:file/img;base64,${files[key].file}`}
        />
      )}
    </div>
  ));
};

export default DisplayFile;
