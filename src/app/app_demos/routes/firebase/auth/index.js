import React, { Component } from "react";
import { connect } from "react-redux";

import {
  signupWithEmailAndPassword,
  signinWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAuthUser,
  signout,
  clearAuthErr
} from "thunks/app_starter/Firebase/Auth";

import appURLs from "../../../../../appURLs/app_starter";

import MyForm from "../../../../../components/wedevlopUI/MyForm";

import Heading from "./ui/Heading";
import Subheading from "./ui/Subheading";
import Body from "./ui/Body";
import SeeCodeButton from "./ui/SeeCodeButton";
import ExternalComponent from "./ui/ExternalComponent";
import Auth from "./ui/Auth";
import AuthResetPass from "./ui/AuthResetPass";
import Loading from "./ui/Loading";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

class ExamplesFirebaseAuth extends Component {
  constructor(props) {
    super(props);
    this.state = { showResetPassForm: false };
  }

  componentDidMount() {
    this.props.clearAuthErr();
    if (this.props.authUser !== null) {
      // this.props.history.push();
    }
  }

  render() {
    return (
      <div style={styleObjects.container}>
        <div style={styleObjects.examplesContainer}>
          <h1 style={styleObjects.demo}>
            <strong>DEMO</strong>
          </h1>

          <Heading text="REPO" />
          <Subheading text="GITHUB REPOSITORY" />
          <a
            style={styleObjects.button}
            href="https://github.com/gerardg-dev/demo-firebase-auth"
            target="_blank"
          >
            {"SEE REPO"}
          </a>

          <Heading text="FIREBASE AUTH" />

          <Subheading text="FIREBASE USER DOCUMENT (FIRESTORE DATABASE)" />
          <Body text="Preview" />
          {this.props.userDoc !== undefined && this.props.userDoc !== null && (
            <div>
              <Body text={`UserID: ${this.props.userDoc.id}`} />
              <Body text={`Email: ${this.props.userDoc.email}`} />
              <Body
                text={`Created: ${new Date(
                  this.props.userDoc.created_at.seconds * 1000
                ).toLocaleDateString("en-US")}`}
              />
            </div>
          )}

          <Subheading text="FIREBASE AUTH USER" />
          <Body text="Preview" />
          {this.props.firebaseUser !== undefined &&
            this.props.firebaseUser !== null && (
              <div>
                <Body text={`UID: ${this.props.firebaseUser.uid}`} />
                <Body text={`Email: ${this.props.firebaseUser.email}`} />
                <Body
                  text={`Email Verified: ${this.props.firebaseUser.emailVerified.toString()}`}
                />
                <Body
                  text={`Phone Number: ${this.props.firebaseUser.phoneNumber}`}
                />
                <Body
                  text={`Display Name: ${this.props.firebaseUser.displayName}`}
                />
                <Body text={`Photo URL: ${this.props.firebaseUser.photoURL}`} />
                {this.props.firebaseUser.metadata !== undefined &&
                  this.props.firebaseUser.metadata !== null && (
                    <Body
                      text={`Creation: ${this.props.firebaseUser.metadata.creationTime}`}
                    />
                  )}
                {this.props.firebaseUser.metadata !== undefined &&
                  this.props.firebaseUser.metadata !== null && (
                    <Body
                      text={`Last Sign In: ${this.props.firebaseUser.metadata.lastSignInTime}`}
                    />
                  )}
              </div>
            )}

          <Subheading text="CONFIRM EMAIL" />
          {this.props.firebaseUser !== undefined &&
            this.props.firebaseUser !== null && (
              <div style={styleObjects.columnCentered}>
                {this.props.firebaseUser.emailVerified === false && (
                  <div style={styleObjects.columnCentered}>
                    <Body text="Preview" />
                    <div>
                      <Body text="Check your email and click on the link we sent to confirm your email." />
                      <Body text="Refesh this page after you confirm your email to see changes." />
                      <Body text="If you dont find the email just click the button below to resend email with link to confirm your email." />
                    </div>
                    <button
                      style={styleObjects.button}
                      onClick={() => this.props.sendEmailVerification()}
                    >
                      {"RESEND EMAIL"}
                    </button>
                  </div>
                )}
                {this.props.firebaseUser.emailVerified === true && (
                  <button
                    style={{
                      ...styleObjects.button,
                      ...{ backgroundColor: "lightGreen", color: "white" }
                    }}
                    onClick={() => alert("Email is already verified!")}
                  >
                    {"EMAIL VERIFIED"}
                  </button>
                )}
              </div>
            )}

          <Subheading text="LOGS: REDUCERS AND ACTIONS" />
          <Body text="Preview" />
          <button
            style={styleObjects.button}
            onClick={async () => {
              console.log("loader");
              console.log(this.props.loader);
              console.log("firebaseUser");
              console.log(this.props.firebaseUser);
              console.log("authUser");
              console.log(this.props.authUser);
              console.log("userDoc");
              console.log(this.props.userDoc);
              console.log("thunk getAuthUser()");
              await this.props.getAuthUser();
              console.log("authError");
              console.log(this.props.authError);
            }}
          >
            {"LOG DATA"}
          </button>

          <Subheading text="SIGNOUT" />
          <Body text="Preview" />
          <button
            style={styleObjects.button}
            onClick={() => this.props.signout()}
          >
            {"SIGNOUT"}
          </button>
        </div>
        {this.props.authUser === null && (
          <Auth
            onForgotPasswordClick={() => {
              this.props.clearAuthErr();
              this.setState({ showResetPassForm: true });
            }}
            onAuthSubmit={async (data, authMethod) => {
              const { myEmail, myPassword } = data;
              if (authMethod === "signup") {
                await this.props.signupWithEmailAndPassword({
                  email: myEmail,
                  password: myPassword
                });
              }
              if (authMethod === "signin") {
                await this.props.signinWithEmailAndPassword({
                  email: myEmail,
                  password: myPassword
                });
              }
            }}
            authError={this.props.authError}
          />
        )}
        {this.state.showResetPassForm === true && (
          <AuthResetPass
            onClose={() => {
              this.props.clearAuthErr();
              this.setState({ showResetPassForm: false });
            }}
            onSubmit={async data => {
              const { myEmail } = data;
              await this.props.sendPasswordResetEmail(myEmail);
              if (this.props.authError === null) {
                await this.setState({ showResetPassForm: false });
                alert(
                  "An email with a link to reset your password has been sent to your email inbox."
                );
              }
            }}
            authError={this.props.authError}
          />
        )}
        {this.props.loader === true && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    loader: auth.loader,
    firebaseUser: auth.firebaseUser,
    authUser: auth.authUser,
    userDoc: auth.userDoc,
    authError: auth.authError,
    initURL: auth.initURL
  };
};

export default connect(mapStateToProps, {
  signupWithEmailAndPassword,
  signinWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAuthUser,
  signout,
  clearAuthErr
})(ExamplesFirebaseAuth);

ExamplesFirebaseAuth.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  addStyle: {},
  redirectURL: "",
  authError: ""
};
