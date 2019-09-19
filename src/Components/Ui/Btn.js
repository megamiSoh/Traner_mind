import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
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

const NormalBtn = ({ btn, onClick, outline }) => (
  <Button onClick={onClick} color="info" size="sm" outline={outline}>
    {btn}
  </Button>
);
const GrayBtn = ({ btn, onClick }) => (
  <Button
    className="graybtnStyle"
    color="secondary"
    size="md"
    onClick={onClick}
  >
    {btn}
  </Button>
);
const DeleteBtn = ({ btn, onClick, outline }) => (
  <Button color="danger" outline={outline} onClick={onClick} size="sm">
    {btn}
  </Button>
);
export { BackBtn, RegstBtn, SearchBtn, NormalBtn, GrayBtn, DeleteBtn };
