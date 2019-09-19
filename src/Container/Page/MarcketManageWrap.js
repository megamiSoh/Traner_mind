import React, { Component } from "react";
// import InfiniteScroll from "react-infinite-scroller";
import {
  ManageSearchBox,
  ManageList,
  TotalManageList
} from "../../Components/Ui";
import { Container, Row } from "reactstrap";
import * as GetListActions from "../../Modules/getListArr";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class MarcketManageWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marcket: []
    };
  }
  componentDidMount() {
    this.getList("marcketCreate ");
    console.log(this.props.data);
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.data === undefined ||
      JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data) ||
      this.props.data === null
    ) {
      this.getList("marcketCreate");
    }
  }
  getList = async id => {
    const { GetListActions } = this.props;
    try {
      await GetListActions.getList(id);

      this.setState({
        marcket: [...this.props.data]
      });
    } catch (e) {
      console.log(this.props.error);
    }
  };
  ConvertDate(date) {
    const ConvertD = new Date(date);
    return `${ConvertD.getFullYear()} - ${ConvertD.getMonth()} - ${ConvertD.getDate()}`;
  }
  render() {
    return (
      <Container>
        {this.props.error}
        <span className="Alltitle">상점관리</span>
        <ManageSearchBox />
        <div className="marketManageWrap">
          <TotalManageList />
          <Row>
            {/* <InfiniteScroll
              pageStart={0}
              // loadMore={loadFunc}
              hasMore={true || false}
              loader={<div className="loader">Loading ...</div>}
            > */}
            {this.state.marcket.map((item, key) => {
              return (
                <ManageList
                  name={item.marcket}
                  use={"true"}
                  id={item.key}
                  createDate={this.ConvertDate(item.createDate)}
                  notUseDate={-12}
                  key={key}
                />
              );
            })}
            {/* </InfiniteScroll> */}
          </Row>
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
)(MarcketManageWrap);
