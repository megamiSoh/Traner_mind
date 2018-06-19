import React from "react";
import { Login } from "../../Container/LoginSetting";
import { Header } from "../../Components/Header";
const ShowAuth = ({ authUser }) => {
  if (authUser === "") {
    return authUser ? null : null;
  } else {
    return authUser ? <Header /> : <Login />;
  }
};

export default ShowAuth;
