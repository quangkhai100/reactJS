import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./../reducers/index";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./../sagas/index";
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_({ shouldnHotReload: false })
    : compose;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};


export default configureStore;
