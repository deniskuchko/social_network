import React from "react";
import s from "./FormsControls.module.css";
import { Field } from "redux-form";

export const FormControl = (Element) => ({
  input,
  meta: { touched, error },
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <Element {...input} {...props} />

      {hasError && <span>{error}</span>}
    </div>
  );
};
export const createFields = (
  placeholder,
  name,
  component,
  validate,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validate}
        {...props}
      />
      {text}
    </div>
  );
};
