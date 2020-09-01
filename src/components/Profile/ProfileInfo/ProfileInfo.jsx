import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.imageBlock}>
        <img src="https://bipbap.ru/wp-content/uploads/2019/07/59b21ebebd0470cb6d8b4570.jpg" />
      </div>
      <div>
        <img src={`${props.profile.photos.large}`} />
      </div>
      <div>
        <h3>{`Full Name: ${props.profile.fullName}`}</h3>
      </div>
    </div>
  );
};

export default ProfileInfo;
