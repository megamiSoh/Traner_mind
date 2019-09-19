import React, { Component } from "react";
import {
  MarcketCreateInfoFirst,
  MarcketCreateTab,
  OriginChildComponent,
  MarcketCreateInfoSecond,
  Remark,
  OriginChildMenu,
  RegistMember,
  RegstBtn,
  BackBtn,
  EmployeeRegist
} from "../../Components/Ui";
import * as routes from "../../Constants/routes";
import { Nav, NavItem, Container, Col, NavLink } from "reactstrap";

class MarcketInfoDetail extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      numChildren: 3,
      ceoList: [
        {
          name: "",
          contact: "",
          email: "",
          id: ""
        }
      ]
    };
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
    const { ceoList } = this.state;
    for (var i = 1; i < this.state.numChildren; i += 1) {
      children.push(
        <OriginChildComponent
          key={i}
          activeTab={this.state.activeTab}
          number={i}
          onToggle={this.toggle}
          id={i}
          className={i}
          name={ceoList.name}
          contact={ceoList.contact}
          email={ceoList.email}
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
          name={ceoList.name}
          contact={ceoList.contact}
          email={ceoList.email}
        />
      );
    }
    return (
      <Container className="MCreate">
        <span className="Alltitle">상점 정보</span>
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
        <div className="MCreateWrap line">
          <Col className="MCreateLeft">
            <Remark title={"특이사항"} />
          </Col>
          <Col className="MCreateRight">
            <RegistMember />
          </Col>
        </div>
        <div className="btnWrap">
          <BackBtn btn={"돌아가기"} location={routes.MARCKETMANAGE} />
          <RegstBtn btn={"내용 변경"} />
        </div>
        <EmployeeRegist
          title={"임의등록"}
          employeeId={"직원 ID"}
          employeeName={"직원명"}
          employeeContact={"전화번호"}
          btnTitle={"직원등록"}
        />
      </Container>
    );
  }
}
export default MarcketInfoDetail;
