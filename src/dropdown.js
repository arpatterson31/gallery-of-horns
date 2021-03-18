import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';

class Dropdown extends React.Component {
  render() {
    return (
      <>
        <Dropdown>

          <DropdownButton id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>

        </Dropdown>
      </>
    );
  }
}

export default Dropdown;
