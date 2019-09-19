import React, { Component } from "react";
import { SearchBox } from "../../Components/Ui";
import { MainWrap } from "../../Components/PageLayout";
import { Container } from "reactstrap";
import * as GetListActions from "../../Modules/getList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: null,
      selectedDay: null,
      RevenueList: [],
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
  handleSelect(day) {
    // this.setState({ selectedDay: day });
    console.log(day);
  }
  handleSelectEnd(day) {
    console.log(day);
  }
  // shouldComponentUpdate(nextProps) {
  //   console.log(nextProps.data);
  //   return true;
  //   // if (JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) {
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  // }
  componentDidMount() {
    this.getList("Revenue");
    // console.log(this.props.data);
  }
  componentWillReceiveProps(nextProps) {
    // console.log(this.props.data);
    if (
      // this.props.data === undefined ||
      JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)
    ) {
      this.getList("Revenue");
    }
  }
  async getList(id) {
    const { GetListActions } = this.props;
    await GetListActions.getList(id);
    try {
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
      console.log(e);
    }
  }

  render() {
    return (
      <Container>
        <span className="Alltitle En">HOME</span>
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
      </Container>
    );
  }
}
export default connect(
  state => ({
    data: state.getList.getList,
    error: state.getList.error,
    pending: state.getList.pending
  }),
  dispatch => ({
    GetListActions: bindActionCreators(GetListActions, dispatch)
  })
)(Main);
