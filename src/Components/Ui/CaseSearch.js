import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { SearchBtn } from "./Btn";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";
import "moment/locale/ko";

const CaseSearch = ({ onStartDay, onEndDay, productList }) => {
  return (
    <div className="MainSearch">
      <Form inline>
        <FormGroup>
          <Label>거래기간</Label>
          <div className="CalendarControl">
            <span className="title">시작</span>
            <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              format="LL"
              onDayChange={onStartDay}
              placeholder={`${formatDate(new Date(), "LL", "ko")}`}
              dayPickerProps={{
                locale: "ko",
                localeUtils: MomentLocaleUtils
              }}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Label />
          <div className="CalendarControl">
            <span className="title">종료</span>
            <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              format="LL"
              onDayChange={onEndDay}
              placeholder={`${formatDate(new Date(), "LL", "ko")}`}
              dayPickerProps={{
                locale: "ko",
                localeUtils: MomentLocaleUtils
              }}
            />
          </div>
        </FormGroup>
      </Form>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">회원명</Label>
          <Input />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">승인자</Label>
          <Input />
        </FormGroup>
      </Form>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">승인번호</Label>
          <Input />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">상품구분</Label>
          <Input type="select" name="select">
            {productList.map((item, key) => {
              return <option key={key}>{item}</option>;
            })}
          </Input>
        </FormGroup>
      </Form>
      <Form inline>
        <FormGroup>
          <Label className="mb-2 mr-sm-2 mb-sm-0">승인금액</Label>
          <Input id="revenue" />
        </FormGroup>
        <Col>
          <div className="SearchBtnWrap">
            <SearchBtn />
          </div>
        </Col>
      </Form>
    </div>
  );
};

export default CaseSearch;
