import React from 'react';

import MyForm from "components/wedevlopUI/MyForm";
import Body from "./Body";
import Modal from "./Modal";

import cssStyles from "../styles/css/default.css";
import cssModules from "../styles/css_modules/default.css";
import sassStyles from "../styles/sass/default.sass";
import scssStyles from "../styles/scss/default.scss";
import stylable from "../styles/stylable/default.st.css";
import styleObjects from "../styles/style_objects/index.js";
import styledComponents from "../styles/styled_components/index.js";

const AuthResetPass = props => {
  const handleOnSubmit = data => {
    props.onSubmit(data);
  };

  return (
    <Modal>
      <button
        style={styleObjects.closeBtn}
        onClick={e => {
          e.preventDefault();
          props.onClose();
        }}
      >
        {"X"}
      </button>
      <div>
        <MyForm
          showFormTitle={true}
          formTitleText="RESET PASSWORD"
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
            }
          ]}
          submitButtonText="SEND RESET LINK"
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
    </Modal>
  );
}

export default AuthResetPass;

AuthResetPass.defaultProps = {
  onClose: () => console.log("onClose"),
  onSubmit: console.log("onSubmit"),
  authError: ""
};
