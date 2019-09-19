import Remark from "./Remark";
import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

class CancelMemo extends React.Component {
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
            {this.props.idTitle}
            <Input />
            <Remark title={this.props.title} />
            <p className="pointColor">
              * 유선취소로 임의취소가 가능하며 취소되면 복구가 안됩니다.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" size="md" onClick={this.props.handleMemo}>
              {this.props.btnTitle}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CancelMemo;
