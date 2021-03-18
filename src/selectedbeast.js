import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  
  render() {
    return (
      // render modal
      <div id="beast-modal">
        <Modal
          show={this.props.show}
          onHide={this.props.closeModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.selectedBeast.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img width={360} src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description} title={this.props.selectedBeast.title}/>
            <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;