import React, { Component, useState} from 'react'
import props from 'prop-types'
import {Modal, Button, Row, Column, Form} from 'react-bootstrap';


export default class AddOrganizerModal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Organizer 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className = "container">
              Add Form Fields Later

          </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant = "danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
                
            </div>
        )
    }
}
