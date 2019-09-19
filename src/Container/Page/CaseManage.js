import React from "react";
import {
  CaseSearch,
  Table,
  BackBtn,
  MobileTable,
  RegstBtn,
  Memo,
  CancelMemo
} from "../../Components/Ui";
import * as routes from "../../Constants/routes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as btnAction from "../../Modules/btnAction";
import { Container } from "reactstrap";

class CaseManage extends React.Component {
  constructor(props) {
    super(props);
    // this.handleCancelMemo = this.props.btnAction.btnAction.bind(this);
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

  handleCancelMemo = () => {
    console.log(this.props.btnAction.btnAction());
    console.log(this.props.show);
    // this.props.btnAction.btnAction(!this.state.showCancelMemo);
    this.setState({
      showCancelMemo: !this.props.show
    });
  };
  handleMemo = () => {
    this.setState({
      showMemo: !this.state.showMemo
    });
  };
  render() {
    return (
      <Container>
        <div className="caseManageWrap">
          <span className="Alltitle">건별관리</span>
          <CaseSearch productList={this.state.productList} />
          {this.state.isDeviceCheck ? (
            <div>
              <MobileTable
                RevenueList={this.state.RevenueList}
                handleClick={this.handleCancelMemo}
              />
              <div className="btnWrap">
                <BackBtn btn={"돌아가기"} location={routes.MARCKETMANAGE} />
              </div>
            </div>
          ) : (
            <div>
              <Table
                revenueList={this.state.RevenueList}
                openMemo={this.handleMemo}
              />
              <p>
                *본 페이지의 임의취소는 App상의 임의 취소로{" "}
                <span className="pointColor">
                  실제 카드사 취소는 별도의 작업 등이 필요로 하는 작업
                </span>입니다.<br /> 다시 말해, 카드사 유선 결제 취소 등은 App에
                반영되기 어려워{" "}
                <span className="pointColor">수동 취소를 하기 위한 절차</span>입니다.
              </p>
              {/* <Memo
                showMemo={this.state.showMemo}
                handleMemo={this.handleMemo}
                title={"특이사항"}
                title2={"입력창"}
                btnTitle={"닫기"}
                memoTitle={"메모"}
              />
              <CancelMemo /> */}
              <div className="btnWrap">
                <BackBtn btn={"돌아가기"} location={routes.MARCKETMANAGE} />
                <RegstBtn btn={"임의취소"} onClick={this.handleCancelMemo} />
              </div>
            </div>
          )}
          <Memo
            showMemo={this.state.showMemo}
            handleMemo={this.handleMemo}
            title={"특이사항"}
            title2={"입력창"}
            btnTitle={"닫기"}
            memoTitle={"메모"}
          />
          <CancelMemo
            showMemo={this.state.showCancelMemo}
            handleMemo={this.handleCancelMemo}
            idTitle={"요청자 ID"}
            title={"특이사항"}
            btnTitle={"취소진행"}
            memoTitle={"임의취소"}
          />
        </div>
      </Container>
    );
  }
}

export default connect(
  state => ({
    show: state.btn.get("show")
  }),
  dispatch => ({
    btnAction: bindActionCreators(btnAction, dispatch)
  })
)(CaseManage);
// export default CaseManage;
