import React from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
const Remark = ({ title, inputValue, typeTextArea, readOnly }) => (
  <Form className="MCreateStyle">
    <FormGroup row>
      <Label sm={4}>{title}</Label>
      <Col sm={8}>
        <Input
          type="textarea"
          onChange={inputValue}
          name={typeTextArea}
          readOnly={readOnly}
        />
      </Col>
    </FormGroup>
  </Form>
);
export default Remark;
