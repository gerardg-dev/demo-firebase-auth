import {
  INIT_URL,
  SIGNUP_USER_SUCCESS,
  SIGNIN_USER_SUCCESS,
  SIGNIN_FACEBOOK_USER_SUCCESS,
  SIGNIN_GOOGLE_USER_SUCCESS,
  SIGNIN_TWITTER_USER_SUCCESS,
  SIGNIN_GITHUB_USER_SUCCESS,
  SIGNOUT_USER_SUCCESS,
  ON_SHOW_LOADER,
  ON_HIDE_LOADER,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  FIREBASE_USER,
  AUTH_USER,
  USER_DOC,
  AUTH_ERROR,
  VERIFY_EMAIL_LINK_SENT,
  RESET_PASSWORD_EMAIL_LINK_SENT
} from "constants/app_starter/ActionTypes";

import localStorageItems from "../../localStorage/app_starter";

const INIT_STATE = {
  loader: false,
  alertMessage: "",
  showMessage: false,
  initURL: "",
  firebaseUser: null,
  // authUser: localStorage.getItem(localStorageItems.user_id),
  authUser: null,
  userDoc: null,
  authError: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case INIT_URL: {
      return {
        ...state,
        initURL: action.payload
      };
    }
    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        authUser: null,
        initURL: "/",
        loader: false,
        //
        firebaseUser: null,
        authUser: null,
        userDoc: null,
        authError: null
      };
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: "",
        showMessage: false,
        loader: false
      };
    }
    case SIGNIN_GOOGLE_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_FACEBOOK_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_TWITTER_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_GITHUB_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true,
        authError: null
      };
    }
    case ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
      };
    }
    case FIREBASE_USER: {
      return {
        ...state,
        firebaseUser: action.payload
      };
    }
    case AUTH_USER: {
      return {
        ...state,
        authUser: action.payload
      };
    }
    case USER_DOC: {
      return {
        ...state,
        loader: false,
        userDoc: action.payload
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        loader: false,
        authError: action.payload
      };
    }
    default:
      return state;
  }
};
