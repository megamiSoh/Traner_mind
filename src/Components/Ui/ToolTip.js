import React from "react";
import { Tooltip } from "reactstrap";

export default class ToolTipList extends React.Component {
  ToolTip = null;
  componentDidMount() {
    console.log(this.ToolTip);
  }

  // id() {}

  render() {
    const toolTip = this.props.isOpen ? (
      <Tooltip
        placement="bottom"
        isOpen={this.props.isOpen}
        target={this.props.target}
      >
        <table className="toolTable">
          <thead>
            <tr>
              <th>카드사</th>
              <th>매출금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>국민</td>
              <td>50000원</td>
            </tr>
            <tr>
              <td>현대</td>
              <td>50000원</td>
            </tr>
            <tr>
              <td>신한</td>
              <td className="pointColor">-50000원</td>
            </tr>
          </tbody>
        </table>
      </Tooltip>
    ) : null;
    return <div>{toolTip}</div>;
  }
}
