import React from "react";
import { RegstBtn } from "./Btn";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as btnAction from "../../Modules/btnAction";
const RegistMember = ({ show, btnAction }) => (
  <div className="registMemberWrap">
    <h1>
      등록직원현황{" "}
      <RegstBtn
        btn={"임의등록"}
        onClick={() => {
          btnAction.btnAction();
          return !show;
        }}
      />
    </h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>직원명</th>
            <th>아이디(메일주소)</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>김민수</td>
            <td>000@ooo.com</td>
            <td>18/12/12</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default connect(
  state => ({
    show: state.btn.get("show")
  }),
  dispatch => ({
    btnAction: bindActionCreators(btnAction, dispatch)
  })
)(RegistMember);
// export default RegistMember;
