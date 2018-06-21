import React from "react";
import { Label, Input } from "reactstrap";
const RevenueSum = ({ totalSum, totalRevenue, totalCancel }) => (
  <div className="sumBoxWrap">
    <div className="sumBox">
      <Label className="mb-2 mr-sm-2 mb-sm-0">매출액</Label>
      <Input id="revenue" readOnly value={totalSum} />
      <span className="sumText">(순수매출 - 순수취소)</span>
    </div>
    <div className="sumBox">
      <Label className="mb-2 mr-sm-2 mb-sm-0">순수매출</Label>
      <Input readOnly value={totalRevenue} />
    </div>
    <div className="sumBox">
      <Label className="mb-2 mr-sm-2 mb-sm-0">순수취소</Label>
      <Input readOnly value={totalCancel} />
    </div>
  </div>
);
export default RevenueSum;
