import { createStore, applyMiddleware } from "redux";
import Modules from "../Modules";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
const Store = () => {
  const logger = createLogger();
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(
    Modules,
    devTools,
    applyMiddleware(logger, ReduxThunk)
  );
  return store;
};
export default Store;
