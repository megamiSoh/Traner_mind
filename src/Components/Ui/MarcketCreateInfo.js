import React from "react";
import { Label, Input, FormGroup, Form, Col } from "reactstrap";

const MarcketCreateInfoFirst = ({
  inpoInputValue,
  typeMarcket,
  typeContact,
  typeCorporateNum,
  typeBusiness,
  typeBank,
  typeFranchise,
  typeCorporIndi
}) => {
  return (
    <Form className="MCreateStyle">
      <FormGroup row>
        <Label sm={4}>상점명</Label>

        <Col sm={8}>
          <Input onChange={inpoInputValue} name={typeMarcket} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>사업자구분</Label>
        <Col sm={8}>
          <Input
            type="select"
            className="infoSelect"
            onChange={inpoInputValue}
            name={typeCorporIndi}
          >
            <option value="corporate">법인</option>
            <option value="individual">개인</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>사업자번호</Label>
        <Col sm={8}>
          <Input onChange={inpoInputValue} name={typeCorporateNum} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>전화번호</Label>
        <Col sm={8}>
          <Input onChange={inpoInputValue} name={typeContact} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>업태 / 업종</Label>
        <Col sm={8}>
          <Input onChange={inpoInputValue} name={typeBusiness} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>은행명</Label>
        <Col sm={8}>
          <Input onChange={inpoInputValue} name={typeBank} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>가맹점 번호</Label>
        <Col sm={8}>
          <Input onChange={inpoInputValue} name={typeFranchise} />
        </Col>
      </FormGroup>
    </Form>
  );
};

const MarcketCreateInfoSecond = ({
  inpoInputValue,
  typeAccountNum,
  typeRoute
}) => {
  return (
    <Form className="MCreateStyle">
      <FormGroup row>
        <Label sm={4}>계좌번호</Label>
        <Col sm={8}>
          <Input
            className="infoInput"
            onChange={inpoInputValue}
            name={typeAccountNum}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>경로</Label>
        <Col sm={8}>
          <Input
            className="infoInput"
            onChange={inpoInputValue}
            name={typeRoute}
          />
        </Col>
      </FormGroup>
    </Form>
  );
};
MarcketCreateInfoFirst.propTypes = {};
export { MarcketCreateInfoFirst, MarcketCreateInfoSecond };
