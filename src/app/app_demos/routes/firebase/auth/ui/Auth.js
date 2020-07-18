import React, { useState } from 'react';

import MyForm from "components/wedevlopUI/MyForm";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Body from "./Body";
import Modal from "./Modal";

import cssStyles from "../styles/css/default.css";
import cssModules from "../styles/css_modules/default.css";
import sassStyles from "../styles/sass/default.sass";
import scssStyles from "../styles/scss/default.scss";
import stylable from "../styles/stylable/default.st.css";
import styleObjects from "../styles/style_objects/index.js";
import styledComponents from "../styles/styled_components/index.js";

const ForgotPassword = props => (
  <button
    style={{
      ...styleObjects.submitButtonDisabled,
      ...{
        backgroundColor: "rgba(0, 0, 0, 0)",
        border: "none",
        marginTop: "-20px",
        marginBottom: "20px",
        fontWeight: "lighter",
        color: "gray"
      }
    }}
    onClick={(e) => {
      e.preventDefault();
      props.onClick();
    }}
  >
    {props.text}
  </button>
);

const AuthMethodToggle = props => (
  <button
    style={{
      ...styleObjects.submitButtonDisabled,
      ...{
        backgroundColor: "rgba(0, 0, 0, 0)",
        border: "none",
        marginTop: "10px",
        fontSize: "12px",
        color: "gray"
      }
    }}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);

const Auth = props => {
  const [authMethod, setAuthMethod] = useState("signin");

  const handleOnSubmit = data => {
    props.onAuthSubmit(data, authMethod);
  };

  return (
    <Modal>
      {authMethod === "signin" && (
        <div>
          <MyForm
            showFormTitle={true}
            formTitleText="SIGN IN"
            formElements={[
              {
                element: "input",
                name: "myEmail",
                label: { show: false },
                placeholder: { text: "Enter Email" },
                validationRules: [
                  {
                    name: "required",
                    inputNames: ["myEmail"]
                  },
                  {
                    name: "validEmail",
                    inputNames: ["myEmail"]
                  }
                ]
              },
              {
                element: "input",
                name: "myPassword",
                type: "password",
                label: { show: false },
                placeholder: { text: "Enter Password" },
                validationRules: [
                  {
                    name: "required",
                    inputNames: ["myPassword"]
                  }
                ]
              }
            ]}
            submitButtonText="SIGN IN"
            formFooterExternalComponent1={
              <ForgotPassword
                onClick={() => props.onForgotPasswordClick()}
                text="Forgot Password"
              />
            }
            formFooterExternalComponent2={
              <AuthMethodToggle
                onClick={() => setAuthMethod("signup")}
                text="DO NOT HAVE AN ACCOUNT? SIGN UP"
              />
            }
            showFormError={true}
            formErrorText={props.authError}
            addStyle={{
              form: styleObjects.form,
              formHeader: styleObjects.formHeader,
              formTitle: styleObjects.formTitle,
              formSubtitle: styleObjects.formSubtitle,
              formMainRow: styleObjects.formMainRow,
              formFooter: styleObjects.formFooter,
              inputContainer: styleObjects.inputContainer,
              input: styleObjects.input,
              submitButton: styleObjects.submitButton,
              submitButtonDisabled: styleObjects.submitButtonDisabled,
              errorLabel: styleObjects.errorLabel,
              formError: styleObjects.formError
            }}
            onSubmit={handleOnSubmit}
          />
        </div>
      )}
      {authMethod === "signup" && (
        <div>
          <MyForm
            showFormTitle={true}
            formTitleText="SIGN UP"
            formElements={[
              {
                element: "input",
                name: "myEmail",
                label: { show: false },
                placeholder: { text: "Enter Email" },
                validationRules: [
                  {
                    name: "required",
                    inputNames: ["myEmail"]
                  },
                  {
                    name: "validEmail",
                    inputNames: ["myEmail"]
                  }
                ]
              },
              {
                element: "input",
                name: "myPassword",
                type: "password",
                label: { show: false },
                placeholder: { text: "Enter Password" },
                validationRules: [
                  {
                    name: "required",
                    inputNames: ["myPassword"]
                  },
                  {
                    name: "validPassword1",
                    inputNames: ["myPassword"]
                  }
                ]
              }
            ]}
            submitButtonText="SIGN UP"
            formFooterExternalComponent2={
              <AuthMethodToggle
                onClick={() => setAuthMethod("signin")}
                text="ALREADY HAVE AN ACCOUNT? SIGN IN"
              />
            }
            showFormError={true}
            formErrorText={props.authError}
            addStyle={{
              form: styleObjects.form,
              formHeader: styleObjects.formHeader,
              formTitle: styleObjects.formTitle,
              formSubtitle: styleObjects.formSubtitle,
              formMainRow: styleObjects.formMainRow,
              formFooter: styleObjects.formFooter,
              inputContainer: styleObjects.inputContainer,
              input: styleObjects.input,
              submitButton: styleObjects.submitButton,
              submitButtonDisabled: styleObjects.submitButtonDisabled,
              errorLabel: styleObjects.errorLabel,
              formError: styleObjects.formError
            }}
            onSubmit={handleOnSubmit}
          />
        </div>
      )}
    </Modal>
  );
};

export default Auth;

Auth.defaultProps = {
  onForgotPasswordClick: console.log("onForgotPasswordClick"),
  onAuthSubmit: console.log("onAuthSubmit"),
  authError: ""
};
