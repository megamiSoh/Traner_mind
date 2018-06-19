import React from "react";
import { Label, Input, FormGroup, Form, Col } from "reactstrap";
// import SwitchButton from "lyef-switch-button";
const MarcketCreateInfoFirst = () => {
  return (
    <Form className="MCreateStyle">
      <FormGroup row>
        <Label sm={4}>상점명</Label>

        <Col sm={8}>
          <Input />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>사업자구분</Label>
        <Col sm={8}>
          <Input type="select" className="infoSelect">
            <option>법인</option>
            <option>개인</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>사업자번호</Label>
        <Col sm={8}>
          <Input />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>전화번호</Label>
        <Col sm={8}>
          <Input />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>업태 / 업종</Label>
        <Col sm={8}>
          <Input />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>은행명</Label>
        <Col sm={8}>
          <Input />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>가맹점 번호</Label>
        <Col sm={8}>
          <Input />
        </Col>
      </FormGroup>
    </Form>
  );
};

const MarcketCreateInfoSecond = () => {
  return (
    <Form className="MCreateStyle">
      <FormGroup row>
        <Label sm={4}>계좌번호</Label>
        <Col sm={8}>
          <Input className="infoInput" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>경로</Label>
        <Col sm={8}>
          <Input className="infoInput" />
        </Col>
      </FormGroup>
    </Form>
  );
};
export { MarcketCreateInfoFirst, MarcketCreateInfoSecond };
