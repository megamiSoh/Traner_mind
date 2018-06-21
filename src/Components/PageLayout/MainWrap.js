import {
  CardRevenue,
  CancelCardRevenue,
  GymRevenue,
  CancelGymRevenue,
  RevenueSum
} from "../Ui";
import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Col } from "reactstrap";
import classnames from "classnames";

export default class MainWrap extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const {
      cardRevenue,
      cancleCard,
      gymRevenue,
      gymCancle,
      totalSum,
      totalRevenue,
      totalCancel
    } = this.props;
    return (
      <div className="MainNavi">
        <RevenueSum
          totalSum={totalSum}
          totalRevenue={totalRevenue}
          totalCancel={totalCancel}
        />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              카드매출
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              카드취소
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              상품매출
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              상품취소
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Col className="mainConWrap">
              {cardRevenue.map((item, key) => {
                return (
                  <CardRevenue
                    name={item.name}
                    revenue={item.revenue}
                    key={key}
                  />
                );
              })}
            </Col>
          </TabPane>
          <TabPane tabId="2">
            <Col className="mainConWrap">
              {cancleCard.map((item, key) => {
                return (
                  <CancelCardRevenue
                    name={item.name}
                    revenue={item.cancel}
                    key={key}
                  />
                );
              })}
            </Col>
          </TabPane>
          <TabPane tabId="3">
            <Col className="mainConWrap">
              {gymRevenue.map((item, key) => {
                return (
                  <GymRevenue
                    name={item.name}
                    revenue={item.revenue}
                    key={key}
                  />
                );
              })}
            </Col>
          </TabPane>
          <TabPane tabId="4">
            <Col className="mainConWrap">
              {gymCancle.map((item, key) => {
                return (
                  <CancelGymRevenue
                    name={item.name}
                    revenue={item.cancel}
                    key={key}
                  />
                );
              })}
            </Col>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
