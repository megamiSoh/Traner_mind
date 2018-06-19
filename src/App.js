import "./index.scss";
import React from "react";
import { MainMenu } from "./Container/Menu";
import { Provider } from "react-redux";
import Store from "./Store";
const App = () => {
  return (
    <Provider store={Store}>
      <MainMenu />
    </Provider>
  );
};
export default App;
