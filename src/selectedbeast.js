import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
         
    }
  }
  
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
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.url} alt={this.props.description} title={this.props.title} />
            <p>{this.props.description}</p>
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