import React from "react";
import { BackBtn, RegstBtn } from "../../Components/Ui";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import * as routes from "../../Constants/routes";
const CaseDetail = () => (
  <ListGroup>
    <ListGroupItem>
      <Row>
        <Col>회원명</Col>
        <Col>megamiSoh</Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col>상품종류</Col>
        <Col>PT</Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col>상품명</Col>
        <Col>50세션</Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col>개월/횟수</Col>
        <Col>50</Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col>결제일자</Col>
        <Col>20180614</Col>
      </Row>
    </ListGroupItem>
    {/* <ListGroupItem>
        <Row>
            <Col>취소일자</Col>
            <Col></Col>
        </Row>
    </ListGroupItem> */}
    <ListGroupItem>
      <Row>
        <Col>카드사</Col>
        <Col>현대</Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col>매출합계</Col>
        <Col>100000</Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col>승인합계</Col>
        <Col>100000</Col>
      </Row>
    </ListGroupItem>
    {/* <ListGroupItem>
        <Row>
            <Col>취소합계</Col>
            <Col></Col>
        </Row>
    </ListGroupItem>
    <ListGroupItem>
        <Row>
            <Col>당일취소</Col>
            <Col></Col>
        </Row>
    </ListGroupItem> */}
    <ListGroupItem>
      <Row>
        <Col>승인번호</Col>
        <Col>1234656789</Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>메모보기</ListGroupItem>
    <ListGroupItem>
      <div className="caseManageWrap">
        <p>
          *본 페이지의 임의취소는 App상의 임의 취소로 <br />
          <span className="pointColor">
            실제 카드사 취소는 별도의 작업 등이 필요로 하는 작업
          </span>입니다.<br />
          <br /> 다시 말해, 카드사 유선 결제 취소 등은 App에 반영되기 어려워{" "}
          <br />
          <span className="pointColor">수동 취소를 하기 위한 절차</span>입니다.
        </p>
      </div>
    </ListGroupItem>
    <ListGroupItem>
      <div className="btnWrap">
        <BackBtn btn={"돌아가기"} location={routes.CASEMANAGE} />
        <RegstBtn btn={"임의취소"} />
      </div>
    </ListGroupItem>
  </ListGroup>
);
export default CaseDetail;
