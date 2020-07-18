import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import configureStore, { history } from "./store";
import "./firebase/firebase";
import App from "./containers/App";
import { PersistGate } from "redux-persist/integration/react";

const storeObject = configureStore();
export const store = storeObject.store;
export const persistor = storeObject.persistor;

const MainApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate persistor={persistor}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </PersistGate>
    </ConnectedRouter>
  </Provider>
);

export default MainApp;
