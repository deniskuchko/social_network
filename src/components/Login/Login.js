import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  FormControl,
  createFields,
} from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

let Input = FormControl("input");
let maxLength25 = maxLengthCreator(25);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {createFields("Email", "email", Input, [required, maxLength25])}
        {createFields("Password", "password", Input, [required, maxLength25], {
          type: "password",
        })}
        {createFields(
          null,
          "rememberMe",
          Input,
          [],
          { type: "checkbox" },
          "Remember me"
        )}
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl &&
          createFields("Symbols from image", "captcha", Input, [required])}

        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
          <button> Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    login(email, password, rememberMe, captcha);
  };
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1> login</h1>;
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
