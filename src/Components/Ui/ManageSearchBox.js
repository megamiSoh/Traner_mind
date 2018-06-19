import React from "react";
import { SearchBtn } from "./Btn";
import { Form, FormGroup, Label, Input } from "reactstrap";
const ManageSearchBox = () => (
  <div className="MainSearch">
    <Form inline>
      <FormGroup>
        <Label>상점명</Label>
        <Input />
      </FormGroup>
      <FormGroup>
        <Label>상점번호</Label>
        <Input />
      </FormGroup>
      <FormGroup>
        <Label>미사용기간 </Label>
        <Input />
      </FormGroup>
      <FormGroup>
        <Label>사용 유무</Label>
        <Input type="select">
          <option>전체</option>
          <option>사용</option>
          <option>종료</option>
        </Input>
      </FormGroup>
    </Form>
    <div className="SearchBtnWrap">
      <SearchBtn />
    </div>
  </div>
);
export default ManageSearchBox;
