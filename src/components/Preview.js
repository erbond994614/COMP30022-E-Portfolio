import React from "react";
import { useSelector } from "react-redux";

const Preview = () => {
  const id = useSelector((state) => state.userAuth.user._id);

  const copyToClipboard = () => {
    const copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Text copied to your clipboard!");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => window.open(`/display/${id}`, "_blank")}
        className="btn btn-secondary btn-block"
      >
        Preview
      </button>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      <input
        id="myInput"
        type="text"
        value={`http://${window.location.hostname}/display/${id}`}
        readOnly={true}
      />
      <h4>
        Your Display Link is http://{window.location.hostname}/display/{id}
      </h4>
    </>
  );
};

export default Preview;
