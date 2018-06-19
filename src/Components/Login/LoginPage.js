import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import logo from "../../TMLOGO.png";
const LoginPage = ({
  onKeyPress,
  value,
  password,
  value1,
  email,
  validation
}) => {
  return (
    <div>
      <Row>
        <Col>
          <h1>
            <img src={logo} alt="Traner Mind" />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for="exampleEmail" hidden>
                ID
              </Label>
              <Input
                value={value}
                onChange={email}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="아아디 입력"
                onKeyPress={onKeyPress}
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for="examplePassword" hidden>
                Password
              </Label>
              <Input
                value={value1}
                onChange={password}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="비밀번호 입력"
                onKeyPress={onKeyPress}
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
