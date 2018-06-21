import React from "react";
import {
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Row,
  Col,
  Label,
  Input
} from "reactstrap";
import classnames from "classnames";

const MarcketCreateTab = props => (
  <div className="AddBtnOrigin" onClick={props.addChild}>
    추가
  </div>
);
const OriginChildMenu = ({ id, number, onToggle, activeTab }) => (
  <NavItem>
    <NavLink
      onClick={() => onToggle(id)}
      className={classnames({ active: activeTab === id })}
    >
      사장{number}
    </NavLink>
  </NavItem>
);
class OriginChildComponent extends React.Component {
  state = {
    name: "",
    contact: "",
    email: "",
    id: 1
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.inputValue(this.state);
  };
  render() {
    const {
      id,
      number,
      activeTab,
      typeName,
      typeEmail,
      typeContact
    } = this.props;
    return (
      <form>
        <div className="createTabStyle">
          <TabContent activeTab={activeTab}>
            <TabPane tabId={id}>
              <Row>
                <Label sm={3}>사장명{number}</Label>
                <Col sm={9}>
                  <Input onChange={this.handleChange} name={typeName} />
                </Col>
              </Row>
              <Row>
                <Label sm={3}>전화번호</Label>
                <Col sm={9}>
                  <Input onChange={this.handleChange} name={typeContact} />
                </Col>
              </Row>
              <Row>
                <Label sm={3}>이메일</Label>
                <Col sm={9}>
                  <Input onChange={this.handleChange} name={typeEmail} />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </form>
    );
  }
  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        id: this.props.id
      },
      () => {
        this.props.inputValue(this.state);
      }
    );
  };
}

export { MarcketCreateTab, OriginChildComponent, OriginChildMenu };
