import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
// import { SignOut } from "../Login";
import { auth } from "../../Lib/Firebase";
import { withRouter } from "react-router-dom";
import logo from "../../TMLOGO.png";
import { CaseDetail } from "../../Components/Ui";
import {
  MarcketInfoDetail,
  InfoWrap,
  Main,
  MarcketManageWrap,
  MarcketWrap,
  RevenueResult,
  RevenueCalendar,
  CaseManage
} from "../../Container/Page";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // NavLink
} from "reactstrap";
import * as routes from "../../Constants/routes";
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  logout = e => {
    const { history } = this.props;
    auth.doSignOut();
    history.push("/");
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="header" light expand="md">
          <NavbarBrand to={routes.HOME}>
            <img src={logo} alt="Trainer Mind" className="headerLogo" />
            <span className="headerTitle">Trainer Mind</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="btnStyle" to={routes.HOME}>
                  MAIN
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="btnStyle" to={routes.MARCKETCREATE}>
                  상점 생성
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="btnStyle" to={routes.MARCKETMANAGE}>
                  상점 관리
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="btnStyle" to={routes.INFO}>
                  공지 관리
                </NavLink>
              </NavItem>
              <NavItem />
            </Nav>
            <div className="logoutWrap">
              <button type="button" onClick={this.logout} className="logoutBtn">
                로그아웃
              </button>
            </div>
          </Collapse>
        </Navbar>

        <Route path={routes.HOME} exact component={Main} />
        <Route path={routes.MARCKETCREATE} component={MarcketWrap} />
        <Route path={routes.MARCKETMANAGE} component={MarcketManageWrap} />
        <Route path={routes.INFO} component={InfoWrap} />
        <Route path={routes.INFODETAIL} component={MarcketInfoDetail} />
        <Route path={routes.REVENUERESULT} component={RevenueResult} />
        <Route path={routes.REVENUECALENDAR} component={RevenueCalendar} />
        <Route path={routes.CASEMANAGE} exact component={CaseManage} />
        <Route path={routes.CASEDETAIL} component={CaseDetail} />
      </div>
    );
  }
}

export default withRouter(Header);
