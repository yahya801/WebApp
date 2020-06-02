import React, { Component, useState } from "react";
// import props from "prop-types";
import { Modal, Button, Row, Column, Form } from "react-bootstrap";
import ReactModal from "react-modal";

export default class AddOrganizerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    console.log("handleOpenModal");
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    console.log("handleCloseModal");
    this.setState({ showModal: false });
  };


  render() {
    console.log("jlihugfhcgvjkjlhk")
    const overlayClassName = this.state.showModal
      ? "modal fade show"
      : "modal fade";
    return (
      <div>
        {/* <h2>njhubiygvbui</h2> */}
        {/* <Button bsStyle="info" onClick={this.handleOpenModal}>
          Trigger Modal
        </Button> */}
      <ReactModal
          className="modal-dialog modal-content"
          bodyOpenClassName="modal-open"
          overlayClassName={overlayClassName}
          ariaHideApp={false}
          isOpen={this.state.showModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Organizer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">Add Form Fields Later</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" >
              Close
            </Button>
          </Modal.Footer>
          </ReactModal>
      </div>
    );
  }
}
