import React from "react";
import { NavLink } from "react-router-dom";
const BackBtn = ({ btn, location }) => (
  <NavLink to={location} className="backBtn btnSpace">
    {btn}
  </NavLink>
);
const RegstBtn = ({ btn, onClick }) => (
  <button className="registBtn btnSpace" onClick={onClick}>
    {btn}
  </button>
);
const SearchBtn = handleClick => <button className="SearchBtn">검색</button>;
export { BackBtn, RegstBtn, SearchBtn };
