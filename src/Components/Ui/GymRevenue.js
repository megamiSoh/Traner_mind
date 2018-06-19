import React from "react";
import { Label, Input } from "reactstrap";
const GymRevenue = ({ name, revenue }) => {
  return (
    <span className="cardRevenueWrap">
      <Label>{name}</Label>
      <Input value={revenue} readOnly />
    </span>
  );
};
const CancelGymRevenue = ({ name, revenue }) => {
  return (
    <span className="cardRevenueWrap">
      <Label>{name}</Label>
      <Input value={revenue} readOnly />
    </span>
  );
};
export { GymRevenue, CancelGymRevenue };
