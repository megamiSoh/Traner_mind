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
import { database } from "../../Lib/Firebase";
import { Nav, NavItem, Container, Col, NavLink } from "reactstrap";
class MarcketWrap extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      numChildren: 3,
      ceoList: [
        {
          name: "megami",
          contact: "010401",
          email: "rekagirl@naver.com",
          id: "1"
        }
      ]
    };
    this.inputValue = this.inputValue.bind(this);
  }
  toggle = tab => {
    console.log(tab);
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    console.log(this.state.activeTab);
  };
  handleSubmit = e => {
    console.log(e);
    console.log(this.state.ceoList);
    database.post(this.state.ceoList);
  };
  inputValue = e => {
    // console.log(e.target.name);
    // this.setState({
    //   ceoList: this.state.ceoList.concat({ e.target.value: e.target.value })
    // });
    // console.log(this.state.ceoList);
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
          name={this.inputValue}
          contact={this.inputValue}
          email={this.inputValue}
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
          name={this.inputValue}
          contact={this.inputValue}
          email={this.inputValue}
          typeName={"name"}
          typeEmail={"email"}
          typeContact={"contact"}
        />
      );
    }
    return (
      <Container className="MCreate">
        <span className="Alltitle">상점 생성</span>
        <div className="MCreateWrap">
          <div className="MCreateLeft">
            <MarcketCreateInfoFirst />
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
              <MarcketCreateInfoSecond />
            </div>
          </div>
        </div>
        <div className="MCreateFoot line">
          <Col>
            <Remark />
          </Col>
          <div className="btnWrap">
            <RegstBtn btn={"등록하기"} onClick={this.handleSubmit} />
          </div>
        </div>
      </Container>
    );
  }
}
export default MarcketWrap;
