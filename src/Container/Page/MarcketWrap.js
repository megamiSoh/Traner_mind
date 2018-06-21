import React, { Component } from "react";
import {
  MarcketCreateInfoFirst,
  MarcketCreateTab,
  OriginChildComponent,
  MarcketCreateInfoSecond,
  Remark,
  OriginChildMenu,
  RegstBtn
} from "../../Components/Ui";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as postListActions from "../../Modules/postList";
import { Nav, NavItem, Container, Col, NavLink } from "reactstrap";
class MarcketWrap extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      numChildren: 3,
      postData: []
    };
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  handleSubmit = async e => {
    // database.post("marcketCreate", this.state.postData);
    const { postListActions } = this.props;
    try {
      await postListActions.postList("marcketCreate", this.state.postData);
    } catch (e) {
      console.log(this.props.err);
    }
  };
  inpoInputValue = e => {
    this.setState({
      postData: {
        ...this.state.postData,
        [e.target.name]: e.target.value
      }
    });
  };
  inpoSecInputValue = e => {
    this.setState({
      postData: {
        ...this.state.postData,
        [e.target.name]: e.target.value
      }
    });
  };
  AreaValue = e => {
    this.setState(
      {
        postData: {
          ...this.state.postData,
          [e.target.name]: e.target.value
        }
      },
      () => {
        return this.state.postData.textArea;
      }
    );
  };
  inputValue = data => {
    this.setState({
      postData: {
        ...this.state.postData,
        [`ceoList${data.id}`]: [{ ...data }]
      }
    });
  };
  onAddChild = () => {
    if (this.state.numChildren < 6) {
      this.setState({
        numChildren: this.state.numChildren + 1
      });
    } else {
      return;
    }
  };
  render() {
    const children = [];
    const childMenu = [];
    for (var i = 1; i < this.state.numChildren; i += 1) {
      children.push(
        <OriginChildComponent
          key={i}
          activeTab={this.state.activeTab}
          number={i}
          onToggle={this.toggle}
          id={i}
          className={i}
          inputValue={this.inputValue}
          input={this.inputValue}
          typeName={"name"}
          typeEmail={"email"}
          typeContact={"contact"}
        />
      );
    }
    for (var x = 1; x < this.state.numChildren; x += 1) {
      childMenu.push(
        <OriginChildMenu
          key={"m" + x}
          activeTab={this.state.activeTab}
          number={x}
          onToggle={this.toggle}
          id={x}
          className={x}
          input={this.inputValue}
          typeName={"name"}
          typeEmail={"email"}
          typeContact={"contact"}
        />
      );
    }
    return (
      <Container className="MCreate">
        {/* <form> */}
        <span className="Alltitle">상점 생성</span>
        <div className="MCreateWrap">
          <div className="MCreateLeft">
            <MarcketCreateInfoFirst
              inpoInputValue={this.inpoInputValue}
              typeMarcket={"marcket"}
              typeContact={"contact"}
              typeCorporateNum={"corporateNum"}
              typeBusiness={"BusinessType"}
              typeBank={"bank"}
              typeFranchise={"franchise"}
              typeCorporIndi={"CorporOrIndi"}
              defaultValue={"individual"}
            />
          </div>
          <div className="MCreateRight">
            <Nav tabs>
              {childMenu}
              <NavItem>
                <NavLink className="AddBtn">
                  <MarcketCreateTab addChild={this.onAddChild} />
                </NavLink>
              </NavItem>
            </Nav>
            {children}
            <span className="alertText">* 최대 5개까지만 추가 가능합니다.</span>
            <div className="secondInfo">
              <MarcketCreateInfoSecond
                inpoInputValue={this.inpoSecInputValue}
                typeAccountNum={"account"}
                typeRoute={"route"}
              />
            </div>
          </div>
        </div>
        <div className="MCreateFoot line">
          <Col>
            <Remark
              title={"특이사항"}
              inputValue={this.AreaValue}
              typeTextArea={"textArea"}
            />
          </Col>
          <div className="btnWrap">
            <RegstBtn btn={"등록하기"} onClick={this.handleSubmit} />
          </div>
        </div>
        {/* </form> */}
      </Container>
    );
  }
}
// export default MarcketWrap;
export default connect(
  state => ({
    data: state.postList.data,
    err: state.postList.err,
    pending: state.getList.pending
  }),
  dispatch => ({
    postListActions: bindActionCreators(postListActions, dispatch)
  })
)(MarcketWrap);
