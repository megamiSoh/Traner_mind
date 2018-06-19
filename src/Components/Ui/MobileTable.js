import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import arrowright from "../../arrowRight.svg";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";
const MobileTable = ({ RevenueList }) => (
  <ListGroup>
    <ListGroupItem>
      매출합계:{" "}
      {RevenueList.map((item, key) => {
        return item.RevenueAll;
      })
        .map(x => parseInt(x.replace(/,/g, ""), 10))
        .reduce((a, b) => a + b)}원
    </ListGroupItem>
    <ListGroupItem>
      승인합계:{" "}
      {RevenueList.map((item, key) => {
        return item.ApprovalAll;
      })
        .map(x => parseInt(x.replace(/,/g, ""), 10))
        .reduce((a, b) => a + b)}원
    </ListGroupItem>
    <ListGroupItem>
      취소합계:{" "}
      {RevenueList.map((item, key) => {
        return item.CancelAll;
      })
        .map(x => parseInt(x.replace(/,/g, ""), 10))
        .reduce((a, b) => a + b)}원
    </ListGroupItem>
    <ListGroupItem>
      당일취소:{" "}
      {RevenueList.map((item, key) => {
        return item.TodayCancel;
      })
        .map(x => parseInt(x.replace(/,/g, ""), 10))
        .reduce((a, b) => a + b)}원
    </ListGroupItem>
    {RevenueList.map((item, key) => {
      return (
        <ListGroupItem className="mobileTableStyle" key={key}>
          <div>
            <span className="TableName">
              {item.CancelName}
              {item.ApprovalName}
            </span>
            <span>{item.productName}</span>
            <span>{item.MonthCount}개월 </span>
            <span className="TableDate">
              {item.PayDate}
              {item.CancelDate}
            </span>
          </div>
          <div>
            <span className="TableCard">
              {item.Card} No.{item.ApprovalNum}
            </span>
            {item.RevenueAll === "0" ? (
              <span className="CancelResult">
                -{item.CancelAll}
                <Link to={routes.CASEDETAIL}>
                  <img src={arrowright} alt="arrowright" />
                </Link>
              </span>
            ) : (
              <span className="RevenueResult">
                {item.RevenueAll}{" "}
                <Link to={routes.CASEDETAIL}>
                  <img src={arrowright} alt="arrowright" />
                </Link>
              </span>
            )}
          </div>
        </ListGroupItem>
      );
    })}
  </ListGroup>
);

export default MobileTable;
