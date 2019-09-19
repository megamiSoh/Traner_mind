import React from "react";
import { Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import SwitchButton from "lyef-switch-button";
import * as routes from "../../Constants/routes";
const ManageList = ({ name, use, id, createDate, notUseDate }) => (
  <div className="manageBox">
    <Col>
      <span>
        {use ? (
          <span className="useStyle">사용</span>
        ) : (
          <span className="nouseStyle">종료</span>
        )}
        {name}
      </span>
      <div className="stylePadding">{createDate}</div>
      <div>미사용{notUseDate}</div>
      <div>
        <NavLink to={routes.INFODETAIL} className="marcketBtn">
          상점정보
        </NavLink>
      </div>
      <div>
        <NavLink to={routes.REVENUECALENDAR} className="revenueBtn">
          매출 캘린더
        </NavLink>
      </div>
      <div>
        <NavLink to={routes.REVENUERESULT} className="revenueResultBtn">
          매출통계
        </NavLink>
      </div>
      <div>
        <NavLink to={routes.CASEMANAGE} className="indiBtn">
          건별관리
        </NavLink>
      </div>
    </Col>
  </div>
);

const TotalManageList = () => (
  <div className="marketManageWrap">
    <div className="total">총 000개 상점</div>
    <div className="left">
      <div className="leftChild">
        <SwitchButton
          id="alphabet"
          labelLeft="가나다순"
          labelRight="역순"
          isChecked
        />
      </div>
      <div className="leftChild">
        <SwitchButton
          id="createDate"
          labelLeft="최신순"
          labelRight="최초순"
          isChecked
        />
      </div>
    </div>
  </div>
);
export { ManageList, TotalManageList };
