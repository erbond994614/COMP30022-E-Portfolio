import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../redux/actions/users";

const FileUpload = () => {
  const dispatch = useDispatch();
  const form = React.createRef();
  const token = useSelector((state) => state.userAuth.token);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(uploadFile(new FormData(form.current), token));
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        allow=".pdf/*, image/*, .ppt/*"
        type="file"
        name="input"
        required
      />
      <input type="submit" value="Upload" />
    </form>
  );
};

export default FileUpload;
