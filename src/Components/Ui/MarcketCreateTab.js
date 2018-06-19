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
const OriginChildComponent = ({
  id,
  number,
  onToggle,
  activeTab,
  name,
  email,
  contact,
  typeName,
  typeEmail,
  typeContact
}) => (
  <div className="createTabStyle">
    <TabContent activeTab={activeTab}>
      <TabPane tabId={id}>
        <Row>
          <Label sm={3}>사장명{number}</Label>
          <Col sm={9}>
            <Input onChange={name} name={typeName} />
          </Col>
        </Row>
        <Row>
          <Label sm={3}>전화번호</Label>
          <Col sm={9}>
            <Input onChange={contact} name={typeContact} />
          </Col>
        </Row>
        <Row>
          <Label sm={3}>이메일</Label>
          <Col sm={9}>
            <Input onChange={email} name={typeEmail} />
          </Col>
        </Row>
      </TabPane>
    </TabContent>

    {/* </span> */}
  </div>
);

export { MarcketCreateTab, OriginChildComponent, OriginChildMenu };
