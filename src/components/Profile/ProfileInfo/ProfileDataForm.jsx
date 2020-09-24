import React from "react";
import { reduxForm } from "redux-form";
import { setStatus } from "../../../redux/profile-reduser";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import {
  createFields,
  FormControl,
} from "../../common/FormsControls/FormsControls";

import s from "./ProfileInfo.module.css";
import style from "../../common/FormsControls/FormsControls.module.css";

let Input = FormControl("input");
let Textarea = FormControl("textarea");

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      <div>
        {error && <div className={style.formSummaryError}>{error}</div>}
      </div>
      <div>
        <b>Full name:</b>
        {createFields("Full name", "fullName", Input, [])}
      </div>
      <div>
        <div>
          <b>Looking for a job:</b>
          {createFields("", "lookingForAJob", Input, [], { type: "checkbox" })}
        </div>

        <div>
          <b>My professional skils:</b>
          {createFields(
            "My professional skils",
            "lookingForAJobDescription",
            Textarea,
            []
          )}
        </div>

        <div>
          <b>About me:</b>
          {createFields("About me", "aboutMe", Textarea, [])}
        </div>
        <div>
          <b>Contacts:</b>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key} className={s.contacts}>
                <b>
                  {key}:{createFields(key, "contacts." + key, Textarea, [])}
                </b>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
