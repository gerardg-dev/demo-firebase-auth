import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../../reducers/index";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../sagas/app_starter/index";

import thunk from "redux-thunk";

import { persistStore } from "redux-persist";

const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware, routeMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    reducers(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("../../reducers/index", () => {
      const nextRootReducer = require("../../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  const persistor = persistStore(store);

  return { store, persistor };
}

export { history };
