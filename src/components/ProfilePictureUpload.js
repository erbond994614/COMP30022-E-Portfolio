import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadProfilePicture } from "../redux/actions/users";

const ProfilePictureUpload = (props) => {
  const dispatch = useDispatch();
  const form = React.createRef();
  const token = useSelector((state) => state.userAuth.token);

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(uploadProfilePicture(new FormData(form.current), token));
  }

  return (
    <form
      style={{
        display: `flex`,
        flexDirection: "column",
      }}
      onSubmit={handleSubmit}
      ref={form}
    >
      <label htmlFor="input">
        <input
          style={{ display: "none" }}
          id="input"
          name="input"
          type="file"
          accept="image/*"
          required
        />
        <span
          style={{
            cursor: "pointer",
          }}
        >
          {props.children}
        </span>
      </label>

      <input type="submit" value="Upload" />
    </form>
  );
};

export default ProfilePictureUpload;
