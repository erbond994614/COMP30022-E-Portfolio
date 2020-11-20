import React from "react";
import { useSelector } from "react-redux";
import Avatar from "./Artist/Avatar";
import avatar from "./Template/avatar.png";
import DisplayFile from "./DisplayFile";

const ProfilePicture = (props) => {
  const profilePicture = useSelector((state) => {
    if (!props.display) {
      return state.userAuth.user.portfolio.profilePicture;
    } else {
      return state.portfolioStore.portfolio.profilePicture;
    }
  });

  return (
    <>
      {!props.display ? (
        <Avatar />
      ) : profilePicture ? (
        <DisplayFile className="avatar-box" file={profilePicture} />
      ) : (
        <img className="avatar-box" src={avatar} alt="Avatar" />
      )}
    </>
  );
};

export default ProfilePicture;
