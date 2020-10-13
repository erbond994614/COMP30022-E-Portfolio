import React from "react";

const DisplayFile = ({ className, file }) => {

  return (
    <div>
      {file.mimetype.includes("image/")
        ? <img
          className={className}
          alt={file.name}
          src={`data:${file.mimetype};base64,${file.data}`}
          />
        : <a
          download={file.name}
          href={`data:${file.mimetype};base64,${file.data}`}
          >
            Download This File
          </a>
      }
    </div>
  )
}

export default DisplayFile;
