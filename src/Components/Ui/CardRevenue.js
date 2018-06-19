import React from "react";
import { Label, Input } from "reactstrap";
const CardRevenue = ({ name, revenue }) => {
  return (
    <span className="cardRevenueWrap">
      <Label>{name}</Label>
      <Input value={revenue} readOnly />
    </span>
  );
};
const CancelCardRevenue = ({ name, revenue }) => {
  return (
    <span className="cardRevenueWrap">
      <Label>{name}</Label>
      <Input value={revenue} readOnly />
    </span>
  );
};
export { CardRevenue, CancelCardRevenue };
