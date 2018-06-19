import React, { Component } from "react";
import { AdInfo, RegstBtn } from "../../Components/Ui";
import { Container } from "reactstrap";
class InfoWrap extends Component {
  render() {
    return (
      <Container>
        <span className="Alltitle">공지사항</span>
        <AdInfo />
        <div className="btnWrap">
          <RegstBtn btn={"등록"} />
        </div>
      </Container>
    );
  }
}
export default InfoWrap;
