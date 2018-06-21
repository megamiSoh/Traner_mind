import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { SearchBtn } from "./Btn";
import { Col, Form, FormGroup, Label } from "reactstrap";
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
