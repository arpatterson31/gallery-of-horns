import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class HornDropdown extends React.Component {
  render() {
    return (
      <>
        <Dropdown>

          <DropdownButton id="dropdown-item-button" title="Number of Horns">
            {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
            <Dropdown.Item as="button" onChange={this.props.updateHornValue}>{this.props.horns}</Dropdown.Item>
            {/* <Dropdown.Item as="button">2</Dropdown.Item>
            <Dropdown.Item as="button">3</Dropdown.Item>
            <Dropdown.Item as="button">100</Dropdown.Item> */}
          </DropdownButton>


        </Dropdown>


       
      </>
    );
  }
}

export default HornDropdown;
