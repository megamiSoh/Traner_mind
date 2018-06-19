import React from "react";
import { auth } from "../../Lib/Firebase/firebase";
const SignOut = () => {
  return (
    <button type="button" onClick={auth.doSignOut}>
      로그아웃
    </button>
  );
};

export default SignOut;
