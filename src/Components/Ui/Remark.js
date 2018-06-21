import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
const Remark = ({ title, inputValue, typeTextArea }) => (
  <Form>
    <FormGroup>
      <Label>{title}</Label>
      <Input type="textarea" onChange={inputValue} name={typeTextArea} />
    </FormGroup>
  </Form>
);
export default Remark;
