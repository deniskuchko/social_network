import React from "react";
import { reduxForm, Field } from "redux-form";
import { FormControl } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";

let Input = FormControl("input");
let maxLength25 = maxLengthCreator(25);

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={"Email"}
            name={"email"}
            component={Input}
            validate={[required, maxLength25]}
          />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            name={"password"}
            type="password"
            component={Input}
            validate={[required, maxLength25]}
          />
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={Input} />
          Remember me
        </div>
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

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div>
      <h1> login</h1>;
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { login })(Login);
