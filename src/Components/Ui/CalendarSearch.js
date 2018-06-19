import React from "react";
import { SearchBtn } from "./Btn";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Picker from "react-month-picker";
import "react-month-picker/css/month-picker.css";
class MonthBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: this.props.value || "N/A"
    };

    this._handleClick = this._handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value || "N/A"
    });
  }

  render() {
    return (
      <div className="box" onClick={this._handleClick}>
        <Input value={this.state.value} readOnly />
      </div>
    );
  }

  _handleClick(e) {
    this.props.onClick && this.props.onClick(e);
  }
}
class CalendarSearch extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mvalue: { year: 2018, month: 11 }
      // mvalue2: { year: 2016, month: 7 },
      // mrange: { from: { year: 2014, month: 8 }, to: { year: 2015, month: 5 } },
      // mrange2: { from: { year: 2013, month: 11 }, to: { year: 2016, month: 3 } }
    };

    this.handleClickMonthBox = this.handleClickMonthBox.bind(this);
    this.handleAMonthChange = this.handleAMonthChange.bind(this);
    // this.handleAMonthDissmis = this.handleAMonthDissmis.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value || "N/A"
    });
    console.log(nextProps.value);
  }
  // handleAMonthDissmis = value => {
  //   console.log(value);
  // };
  handleClickMonthBox(e) {
    this.refs.pickAMonth.show();
  }
  handleAMonthChange = (value, text) => {
    console.log(text);
    this.setState({
      mvalue: { year: value, month: text }
    });
  };
  render() {
    let pickerLang = {
      months: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
      ],
      from: "From",
      to: "To"
    };
    // mvalue = { year: 2015, month: 11 },
    // mrange = { from: { year: 2014, month: 8 }, to: { year: 2015, month: 5 } };
    const mvalue = this.state.mvalue;
    let makeText = m => {
      if (m && m.year && m.month)
        return m.year + "년 " + pickerLang.months[m.month - 1];
      return "?";
    };
    return (
      <div className="MainSearch">
        <Form inline>
          <FormGroup>
            <Label>지점명</Label>
            <Input id="revenue" />
          </FormGroup>
          <FormGroup>
            <Label>거래일자</Label>
            <Picker
              ref="pickAMonth"
              value={mvalue}
              lang={pickerLang.months}
              onChange={this.handleAMonthChange}
              // onDismiss={this.handleAMonthDissmis}
            >
              <MonthBox
                value={makeText(mvalue)}
                onClick={this.handleClickMonthBox}
              />
            </Picker>
          </FormGroup>
          <FormGroup>
            <Label> &nbsp;</Label>
            <div className="SearchBtnWrap">
              <SearchBtn />
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
// const CalendarSearch = () => (

// );
export default CalendarSearch;
