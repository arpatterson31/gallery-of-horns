import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class HornDropdown extends React.Component {
  render() {
    return (
      <>
        <Dropdown>

          <DropdownButton id="dropdown-item-button" title="Number of Horns" >
            {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
            <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={1}>1</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={2}>2</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={3}>3</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={100}>100</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.updateHornValue} value={null}>All</Dropdown.Item>
          </DropdownButton>


        </Dropdown>


       
      </>
    );
  }
}

export default HornDropdown;
