import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

import s from "./ProfileInfo.module.css";
import { useState } from "react";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  isOwner,
  updateStatus,
  savePhoto,
  isPhotoSetup,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
      if (!e.target.files[0]) {
        return <Preloader />;
      }
    }
  };
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  if (!profile) {
    return <Preloader />;
  }
  if (isPhotoSetup) {
    return <Preloader />;
  }
  return (
    <div className={s.descriptionBlock}>
      <div className={s.imageBlock}>
        <img src="https://bipbap.ru/wp-content/uploads/2019/07/59b21ebebd0470cb6d8b4570.jpg" />
      </div>
      <div>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
      </div>
      {editMode ? (
        <ProfileDataFormReduxForm
          initialValues={profile}
          onSubmit={onSubmit}
          profile={profile}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}

      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <div>
          <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob && (
          <div>
            <b>My professional skils:</b> {profile.lookingForAJobDescription}
          </div>
        )}
        <div>
          <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
          <b>Contacts:</b>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contacts
                key={key}
                contactTitls={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Contacts = ({ contactTitls, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitls}:</b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
