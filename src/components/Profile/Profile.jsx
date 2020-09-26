import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo
        profile={props.profile}
        isOwner={props.isOwner}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        isPhotoSetup={props.isPhotoSetup}
        saveProfile={props.saveProfile}
        isDisabledSave={props.isDisabledSave}
      />

      <MyPostsContainer />
    </div>
  );
};

export default Profile;
