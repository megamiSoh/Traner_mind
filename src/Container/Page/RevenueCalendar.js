import React from "react";
import { Container } from "reactstrap";
import { BCalendar, CalendarSearch, BackBtn } from "../../Components/Ui";
import * as routes from "../../Constants/routes";
class RevenueCalendar extends React.Component {
  render() {
    // return "hello";
    return (
      <Container>
        <span className="Alltitle">
          매출 캘린더<span className="marcketNum">상점번호 - 121212</span>
        </span>

        <CalendarSearch />
        <div className="BigCalendarWRap">
          <div className="rev">
            <div className="rev1">총매출액 합계: 200,000원</div>{" "}
            <div className="rev1">순수매출 합계: 200,000원</div>
            <div className="rev1">순수취소 합계:200,000원</div>
          </div>
          <BCalendar />
        </div>
        <div className="btnWrap">
          <BackBtn btn={"돌아가기"} location={routes.MARCKETMANAGE} />
        </div>
      </Container>
    );
  }
}
export default RevenueCalendar;
