import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.imageBlock}>
        <img src="https://bipbap.ru/wp-content/uploads/2019/07/59b21ebebd0470cb6d8b4570.jpg" />
      </div>
      <div>
        <img src="" />
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
