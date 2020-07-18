// https://firebase.google.com/docs/auth/web/auth-state-persistence

import {
  SIGNUP_USER_SUCCESS,
  SIGNIN_USER_SUCCESS,
  SIGNIN_FACEBOOK_USER_SUCCESS,
  SIGNIN_GOOGLE_USER_SUCCESS,
  SIGNIN_TWITTER_USER_SUCCESS,
  SIGNIN_GITHUB_USER_SUCCESS,
  SIGNOUT_USER_SUCCESS,
  ON_SHOW_LOADER,
  ON_HIDE_LOADER,
  FIREBASE_USER,
  AUTH_USER,
  USER_DOC,
  AUTH_ERROR,
  VERIFY_EMAIL_LINK_SENT,
  RESET_PASSWORD_EMAIL_LINK_SENT
} from "constants/app_starter/ActionTypes";

import {
  firebase,
  auth,
  firestore,
  functions
} from "../../../firebase/firebase";

import {
  userSignUp,
  userSignIn,
  userSignOut,
  userSignUpSuccess,
  userSignInSuccess,
  userFacebookSignInSuccess,
  userGoogleSignInSuccess,
  userTwitterSignInSuccess,
  userGithubSignInSuccess,
  userSignOutSuccess
} from "actions/app_starter/Auth";

import dbModels from "../../../db-models/app_starter";
import localStorageItems from "../../../localStorage/app_starter";

export const getAuthUser = () => {
  return async dispatch => {
    dispatch({ type: ON_SHOW_LOADER });
    return new Promise(function(resolve, reject) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // var refreshToken = user.refreshToken;
          // var uid = user.uid;
          // var displayName = user.displayName;
          // var photoURL = user.photoURL;
          // var email = user.email;
          // var emailVerified = user.emailVerified;
          // var phoneNumber = user.phoneNumber;
          // var isAnonymous = user.isAnonymous;
          // var tenantId = user.tenantId;
          // var metadata = user.metadata;
          // var metadataLastSignInTime = user.metadata.lastSignInTime;
          // var metadataCreationTime = user.metadata.creationTime;
          // var providerData = user.providerData;

          dispatch({ type: AUTH_USER, payload: user.uid });
          // localStorage.setItem(localStorageItems.user_id, user.uid);
          dispatch({ type: FIREBASE_USER, payload: user });
          dispatch({ type: ON_HIDE_LOADER });
          resolve(user);
        } else {
          // No user is signed in.
          dispatch({ type: AUTH_USER, payload: null });
          // localStorage.setItem(localStorageItems.user_id, null);
          dispatch({ type: FIREBASE_USER, payload: null });
          dispatch({ type: USER_DOC, payload: null });
          dispatch({ type: ON_HIDE_LOADER });
          resolve(null); // or -> reject(Error("No Auth User"));
        }
      });
    });
  };
};

export const sendPasswordResetEmail = email => {
  return async dispatch => {
    try {
      dispatch({ type: ON_SHOW_LOADER });
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (err) {
      const errCodeAndMsg = err.code + " - " + err.message;
      dispatch({ type: AUTH_ERROR, payload: errCodeAndMsg });
      // return Promise.reject(e);
    }
    dispatch({ type: ON_HIDE_LOADER });
  };
};

export const sendEmailVerification = () => {
  return async dispatch => {
    try {
      dispatch({ type: ON_SHOW_LOADER });

      const currentUser = firebase.auth().currentUser;
      await currentUser.sendEmailVerification();
    } catch (err) {
      const errCodeAndMsg = err.code + " - " + err.message;
      dispatch({ type: AUTH_ERROR, payload: errCodeAndMsg });
      // return Promise.reject(e);
    }
    dispatch({ type: ON_HIDE_LOADER });
  };
};

export const signupWithEmailAndPassword = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch({ type: ON_SHOW_LOADER });

      let newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      dispatch({ type: FIREBASE_USER, payload: newUser.user });

      const uid = newUser.user.uid;

      dispatch({ type: AUTH_USER, payload: uid });
      // localStorage.setItem(localStorageItems.user_id, uid);

      const dateNow = firebase.firestore.Timestamp.fromDate(new Date());

      let userModel = {
        ...dbModels.User,
        ...{
          id: uid,
          created_at: dateNow,
          email
        }
      };

      await firestore
        .collection("users")
        .doc(uid)
        .set(userModel);

      const usersSnapshot = await firebase
        .firestore()
        .collection("users")
        // .orderBy("name", "asc")
        .get();

      let userDoc = {};

      usersSnapshot.docs.map(doc => {
        const docData = doc.data();
        if (docData.id.toString() === uid.toString()) {
          userDoc = docData;
        }
      });

      dispatch({ type: USER_DOC, payload: userDoc });

      const currentUser = firebase.auth().currentUser;
      currentUser.sendEmailVerification();
    } catch (err) {
      const errCodeAndMsg = err.code + " - " + err.message;
      dispatch({ type: AUTH_ERROR, payload: errCodeAndMsg });
      // return Promise.reject(e);
    }
    dispatch({ type: ON_HIDE_LOADER });
  };
};

export const signinWithEmailAndPassword = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch({ type: ON_SHOW_LOADER });

      const authUser = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      // CHECK IF USER EXISTS IN THE DATABASE

      const uid = authUser.user.uid;

      const usersSnapshot = await firebase
        .firestore()
        .collection("users")
        // .orderBy("name", "asc")
        .get();

      let userDoc = null;

      usersSnapshot.docs.map(doc => {
        const docData = doc.data();
        if (docData.id.toString() === uid.toString()) {
          userDoc = docData;
        }
      });

      // IF USER DOES NOT EXISTS IN THE DATABASE, CREATE IT

      if (userDoc === undefined || userDoc === null) {
        const dateNow = firebase.firestore.Timestamp.fromDate(new Date());

        let userModel = {
          ...dbModels.User,
          ...{
            id: uid,
            created_at: dateNow,
            email: authUser.user.email
          }
        };

        await firestore
          .collection("users")
          .doc(uid)
          .set(userModel);

        const usersSnapshot = await firebase
          .firestore()
          .collection("users")
          // .orderBy("name", "asc")
          .get();

        usersSnapshot.docs.map(doc => {
          const docData = doc.data();
          if (docData.id.toString() === uid.toString()) {
            userDoc = docData;
          }
        });
      }

      const currentUser = firebase.auth().currentUser;
      dispatch({ type: FIREBASE_USER, payload: currentUser });

      dispatch({ type: AUTH_USER, payload: uid });
      // localStorage.setItem(localStorageItems.user_id, uid);

      dispatch({ type: USER_DOC, payload: userDoc });
    } catch (err) {
      const errCodeAndMsg = err.code + " - " + err.message;
      dispatch({ type: AUTH_ERROR, payload: errCodeAndMsg });
      // return Promise.reject(e);
    }
    dispatch({ type: ON_HIDE_LOADER });
  };
};

export const signout = () => {
  return async dispatch => {
    try {
      dispatch({ type: ON_SHOW_LOADER });

      const authUser = await firebase.auth().signOut();

      dispatch({ type: SIGNOUT_USER_SUCCESS });
      // localStorage.setItem(localStorageItems.user_id, null);
    } catch (err) {
      const errCodeAndMsg = err.code + " - " + err.message;
      dispatch({ type: AUTH_ERROR, payload: errCodeAndMsg });
      // return Promise.reject(e);
    }
    dispatch({ type: ON_HIDE_LOADER });
  };
};

export const clearAuthErr = () => {
  return dispatch => dispatch({ type: AUTH_ERROR, payload: null });
};
