import React from "react";
// import  from 'react'
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";
import {
  BCalendar,
  CalendarSearch,
  BackBtn,
  Table,
  ShowModal,
  ToolTipList,
  MobileTable
} from "../../Components/Ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as btnAction from "../../Modules/btnAction";
class RevenueCalendar extends React.Component {
  calendar = null;
  constructor(props) {
    super(props);
    // this.handleOverEvent = this.handleOverEvent.bind(this);

    this.state = {
      showMemo: false,
      showCancelMemo: false,
      isDeviceCheck: false,
      productList: [
        "회원권",
        "PT",
        "필라테스",
        "수영강습",
        "GOLF",
        "운동복",
        "락커",
        "위약금",
        "기타"
      ],
      RevenueList: [
        {
          PayDate: "2015-12-15",
          CancelDate: "",
          Card: "현대",
          RevenueAll: "200,000",
          ApprovalAll: "200,000",
          CancelAll: "0",
          TodayCancel: "0",
          ApprovalNum: "123123",
          Name: "megamiSoh",
          KindProduct: "50세션",
          ProductName: "golf",
          MonthCount: "50",
          ApprovalName: "megami",
          CancelName: ""
        },
        {
          PayDate: "",
          CancelDate: "2012-12-12",
          Card: "신한",
          RevenueAll: "0",
          ApprovalAll: "0",
          CancelAll: "1,000,000",
          TodayCancel: "0",
          ApprovalNum: "123123",
          Name: "megamiSoh",
          KindProduct: "50세션",
          ProductName: "PT",
          MonthCount: "50",
          ApprovalName: "",
          CancelName: "megami"
        },
        {
          PayDate: "2018-12-15",
          CancelDate: "",
          Card: "우리",
          RevenueAll: "230,000",
          ApprovalAll: "230,000",
          CancelAll: "0",
          TodayCancel: "0",
          ApprovalNum: "123123",
          Name: "megamiSoh",
          KindProduct: "50세션",
          ProductName: "수영",
          MonthCount: "50",
          ApprovalName: "MegamiSoh",
          CancelName: ""
        }
      ],
      events: [
        {
          id: "popover-1",
          start: new Date(2018, 6, 11),
          end: new Date(2018, 6, 11),
          title: 10000
        },
        {
          id: "popover-2",
          start: new Date(2018, 6, 30),
          end: new Date(2018, 6, 30),
          title: 1000000
        }
      ]
    };
  }
  deviceCheck = () => {
    var mobileKeyWords = [
      "Android",
      "iPhone",
      "iPod",
      "BlackBerry",
      "Windows CE",
      "SAMSUNG",
      "LG",
      "MOT",
      "SonyEricsson"
    ];
    for (var info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
        return this.setState({ isDeviceCheck: true });
      }
    }
    return this.setState({ isDeviceCheck: false });
  };
  componentDidMount() {
    this.deviceCheck();
    console.log(this.props.show);
    if (this.props.show) {
      this.props.btnAction.btnAction();
      console.log(this.props.show);
    }
  }
  handleEvent = slotInfo => {
    this.props.btnAction.btnAction();
  };
  MhandleEvent = slotInfo => {
    return <Link to={routes.CASEDETAIL} />;
    //  this.props.btnAction.btnAction();
  };
  componentDidUpdate(nextState, nextProps) {
    if (document.getElementById("rbc-selected")) {
      this.props.btnAction.popover(true);
      this.props.btnAction.btn(true);
    } else {
      this.props.btnAction.popover(false);
      this.props.btnAction.btn(false);
    }
  }
  handleOverEvent = (target, prop) => {
    this.props.btnAction.popover(target);
  };

  render() {
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
          <BCalendar
            id={"rbc-calendar"}
            events={this.state.events}
            handleEvent={this.handleEvent}
            handleOverEvent={this.handleOverEvent.bind(this)}
          />
        </div>
        <div className="btnWrap">
          <BackBtn btn={"돌아가기"} location={routes.MARCKETMANAGE} />
        </div>

        {this.state.isDeviceCheck ? (
          // (
          //   <div>
          //     <MobileTable
          //       RevenueList={this.state.RevenueList}
          //       handleClick={this.handleCancelMemo}
          //     />
          //     <div className="btnWrap">
          //       <BackBtn btn={"돌아가기"} location={routes.MARCKETMANAGE} />
          //     </div>
          //   </div>
          // )

          <div>
            <ShowModal
              isOpen={this.props.show}
              toggle={() => {
                this.props.btnAction.btnAction();
              }}
              modalTitle={"결제상세내역"}
              btn={"확인"}
              here={
                <MobileTable
                  RevenueList={this.state.RevenueList}
                  defaultShow={() => {
                    this.props.btnAction.btnAction();
                  }}
                />
              }
            />
          </div>
        ) : (
          <div>
            <ShowModal
              isOpen={this.props.show}
              toggle={() => {
                this.props.btnAction.btnAction();
                return !this.props.show;
              }}
              modalTitle={"결제상세내역"}
              btn={"확인"}
              here={<Table revenueList={this.state.RevenueList} />}
            />
            <ToolTipList
              isOpen={this.props.popover}
              // toggle={this.toolTip}
              // id={this.props.id}
              target={this.props.id}
            />
          </div>
        )}
      </Container>
    );
  }
}
export default connect(
  state => ({
    show: state.btn.get("show"),
    popover: state.btn.get("popover"),
    id: state.btn.get("id")
  }),
  dispatch => ({
    btnAction: bindActionCreators(btnAction, dispatch)
  })
)(RevenueCalendar);
// export default RevenueCalendar;
