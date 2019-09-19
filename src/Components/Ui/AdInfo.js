import React from "react";
import { Row, Col, Input } from "reactstrap";
const AdInfo = ({
  fileRegist,
  id,
  inputValue,
  firstName,
  secName,
  thirdName,
  firstTitle,
  secTitle,
  thirdTitle,
  fileFirst,
  fileSec,
  fileThird
}) => (
  <div className="AdminWrap">
    <Row>
      <Col sm="4" className="infoWrap">
        <Input placeholder="제목" name={firstTitle} onChange={inputValue} />
        <Input
          type="textarea"
          className="infoText"
          name={firstName}
          onChange={inputValue}
          placeholder="내용을 입력해주세요."
        />

        <input type="file" onChange={fileRegist} id={id} name={fileFirst} />
      </Col>
      <Col sm="4" className="infoWrap">
        <Input placeholder="제목" name={secTitle} onChange={inputValue} />
        <Input
          type="textarea"
          className="infoText"
          name={secName}
          onChange={inputValue}
          placeholder="내용을 입력해주세요."
        />
        <input type="file" onChange={fileRegist} id={id} name={fileSec} />
      </Col>
      <Col sm="4" className="infoWrap">
        <Input placeholder="제목" onChange={inputValue} name={thirdTitle} />
        <Input
          type="textarea"
          className="infoText"
          name={thirdName}
          onChange={inputValue}
          placeholder="내용을 입력해주세요."
        />
        <input type="file" onChange={fileRegist} id={id} name={fileThird} />
      </Col>
    </Row>
  </div>
);
export default AdInfo;
