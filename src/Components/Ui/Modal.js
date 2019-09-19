import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ShowModal extends React.Component {
  render() {
    return (
      <div className="modalWrap">
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>
            {this.props.modalTitle}
          </ModalHeader>
          <ModalBody>
            <span className="rightBtn ">{this.props.addBtn}</span>
            {/* <h1>{this.propsModalTitle}</h1> */}
            {this.props.contents}
          </ModalBody>
          <ModalFooter>{this.props.btn}</ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ShowModal;
