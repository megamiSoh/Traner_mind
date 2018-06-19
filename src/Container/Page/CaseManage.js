import React from "react";
import {
  CaseSearch,
  Table,
  BackBtn,
  MobileTable,
  RegstBtn
} from "../../Components/Ui";
import * as routes from "../../Constants/routes";
import { Container } from "reactstrap";
class CaseManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    console.log(this.state.isDeviceCheck);
    return (
      <Container>
        <div className="caseManageWrap">
          <span className="Alltitle">건별관리</span>
          <CaseSearch productList={this.state.productList} />
          {this.state.isDeviceCheck ? (
            <div>
              <MobileTable RevenueList={this.state.RevenueList} />
              <div className="btnWrap">
                <BackBtn btn={"돌아가기"} location={routes.MARCKETMANAGE} />
              </div>
            </div>
          ) : (
            <div>
              <Table revenueList={this.state.RevenueList} />
              <p>
                *본 페이지의 임의취소는 App상의 임의 취소로{" "}
                <span className="pointColor">
                  실제 카드사 취소는 별도의 작업 등이 필요로 하는 작업
                </span>입니다.<br /> 다시 말해, 카드사 유선 결제 취소 등은 App에
                반영되기 어려워{" "}
                <span className="pointColor">수동 취소를 하기 위한 절차</span>입니다.
              </p>
              {/* <Btn /> */}
              <div className="btnWrap">
                <BackBtn btn={"돌아가기"} location={routes.MARCKETMANAGE} />
                <RegstBtn btn={"임의취소"} />
              </div>
            </div>
          )}
        </div>
      </Container>
    );
  }
}

export default CaseManage;
