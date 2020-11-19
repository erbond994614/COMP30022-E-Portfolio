import React from "react";
import { useSelector } from "react-redux";
import avatar from "./Template/avatar.png";
import DisplayFile from "./DisplayFile";
import ProfilePictureUpload from "./ProfilePictureUpload";

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
        <ProfilePictureUpload>
          {profilePicture ? (
            <DisplayFile className="avatar" file={profilePicture} />
          ) : (
            <img className="avatar" src={avatar} alt="Avatar" />
          )}
        </ProfilePictureUpload>
      ) : profilePicture ? (
        <DisplayFile className="avatar" file={profilePicture} />
      ) : (
        <img className="avatar" src={avatar} alt="Avatar" />
      )}
    </>
  );
};

export default ProfilePicture;
