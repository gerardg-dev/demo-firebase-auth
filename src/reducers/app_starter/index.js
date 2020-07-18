import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Settings from "./Settings";
import Auth from "./Auth";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const rootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    auth: Auth,
    settings: Settings
  });
};

export default history => persistReducer(persistConfig, rootReducer(history));
