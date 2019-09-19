import React, { Component } from "react";
import { AdInfo, RegstBtn } from "../../Components/Ui";
import { Container } from "reactstrap";
import { storage } from "../../Lib/Firebase";
import * as postListActions from "../../Modules/postList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class InfoWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  findFileName = e => {
    const FileName = e.target.files[0].name;
    const blob = new Blob([e.target.result], { type: "image/jpeg" });
    this.setState({
      [e.target.name]: blob,
      [`${e.target.name}name`]: FileName
    });
  };
  sendSubmit = (imgFile, fileName) => {
    const fileValue = [
      storage.task(this.state.fileFirst, this.state.fileFirstname),
      storage.task(this.state.fileSec, this.state.fileSecname),
      storage.task(this.state.fileThird, this.state.fileThirdname)
    ];
    Promise.all(fileValue)
      .then(res => {
        this.props.postListActions.postList("AdInfoList", this.state);
      })
      .catch(e => {
        console.log("공지사항을 등록할수 없음 .");
      });
  };

  inputValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Container>
        <span className="Alltitle">공지사항</span>
        <AdInfo
          fileRegist={this.findFileName}
          firstName={"infoFirst"}
          secName={"infoSec"}
          thirdName={"infoThird"}
          inputValue={this.inputValue}
          firstTitle={"titleFirst"}
          secTitle={"titleSec"}
          thirdTitle={"titleThird"}
          fileFirst={"fileFirst"}
          fileSec={"fileSec"}
          fileThird={"fileThird"}
        />
        <div className="btnWrap">
          <RegstBtn btn={"등록"} onClick={this.sendSubmit} id={"file"} />
        </div>
      </Container>
    );
  }
}

// export default InfoWrap;
export default connect(
  state => ({
    data: state.postList.data,
    err: state.postList.err,
    pending: state.postList.pending
  }),
  dispatch => ({
    postListActions: bindActionCreators(postListActions, dispatch)
  })
)(InfoWrap);
