import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../../Constants/routes";
import { MainWrap } from "../../Components/PageLayout";
import { SearchBox } from "../../Components/Ui";
import { Container } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as GetListActions from "../../Modules/getList";
class RevenueResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: null,
      selectedDay: null,
      Revenue: {},
      gymList: [],
      gymCancelList: [],
      cardList: [],
      cardCancelList: [],
      totalSum: "",
      totalRevenue: "",
      totalCancel: ""
    };
  }
  componentDidMount() {
    this.getList("Revenue");
    console.log(1);
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.data === undefined ||
      JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)
    ) {
      this.getList("Revenue");
      console.log(2);
    }
  }
  getList = async id => {
    const { GetListActions } = this.props;
    try {
      await GetListActions.getList(id);
      console.log("complete");
      this.setState({
        Revenue: this.props.data,
        cardList: this.props.data.CardRevenue.Card,
        cardCancelList: this.props.data.CardRevenue.CardCancel,
        gymList: this.props.data.GymRevenue.Gym,
        gymCancelList: this.props.data.GymRevenue.GymCancel,
        totalSum: this.props.data.TotalRevenue,
        totalRevenue: this.props.data.PureRevenue,
        totalCancel: this.props.data.PureCancel
      });
    } catch (e) {
      console.log(this.props.error);
    }
  };
  handleSelect(day) {
    // this.setState({ selectedDay: day });
    console.log(day);
  }
  handleSelectEnd(day) {
    console.log(day);
  }
  render() {
    return (
      <Container>
        <span className="Alltitle">매출통계</span>
        <SearchBox
          onStartDay={this.handleSelect}
          onEndDay={this.handleSelectEnd}
        />
        <div className="revenuWrap">
          <MainWrap
            cardRevenue={this.state.cardList}
            cancleCard={this.state.cardCancelList}
            gymRevenue={this.state.gymList}
            gymCancle={this.state.gymCancelList}
            totalSum={this.state.totalSum}
            totalRevenue={this.state.totalRevenue}
            totalCancel={this.state.totalCancel}
          />
        </div>
        <div className="btnWrap">
          <NavLink className="backBtn" to={routes.MARCKETMANAGE}>
            돌아가기
          </NavLink>
        </div>
      </Container>
    );
  }
}
export default connect(
  state => ({
    data: state.getList.getList,
    error: state.getList.error,
    pending: state.getList.pending
    // data: getList.get("getList")
  }),
  dispatch => ({
    GetListActions: bindActionCreators(GetListActions, dispatch)
  })
)(RevenueResult);
// export default RevenueResult;
