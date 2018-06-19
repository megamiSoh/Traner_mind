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

const SearchBox = ({ onStartDay, onEndDay }) => {
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
        <FormGroup>
          <Label className="mb-2 mr-sm-2 mb-sm-0">매출액</Label>
          <Input id="revenue" />
          <span className="title">(순수매출 - 순수취소)</span>
        </FormGroup>
      </Form>
      <Form inline>
        {/* <FormGroup>
          <Label className="mb-2 mr-sm-2 mb-sm-0">매출액</Label>
          <Input id="revenue" />
        </FormGroup>
        <FormGroup>
          <span>(순수매출 - 순수취소)</span>
        </FormGroup> */}
        <FormGroup>
          <Label className="mb-2 mr-sm-2 mb-sm-0">순수매출</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label className="mb-2 mr-sm-2 mb-sm-0">순수취소</Label>
          <Input />
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

export default SearchBox;
