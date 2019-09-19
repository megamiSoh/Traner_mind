import Remark from "./Remark";
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Memo extends React.Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.showMemo}
          toggle={this.props.handleMemo}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.handleMemo}>
            {this.props.memoTitle}
          </ModalHeader>
          <ModalBody>
            <h1>{this.propsmemoTitle}</h1>
            <Remark title={this.props.title} readOnly={"readOnly"} />
            <Remark title={this.props.title2} />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.handleMemo}>
              확인
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Memo;
