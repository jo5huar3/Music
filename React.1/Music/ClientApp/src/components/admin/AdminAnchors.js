import React, { useState } from 'react';
import { 
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
 } from 'reactstrap/lib';


function DropDownAnchors() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
  

  return (
    <Dropdown nav isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle variant="success" id="Dropdown" color="black">
        Admin
      </DropdownToggle>

      <DropdownMenu dark="false">
        <DropdownItem href="/song">Roles</DropdownItem>
        <DropdownItem href="/song">Users</DropdownItem>
        <DropdownItem href="/fetch-roles">Role Claims</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export { DropDownAnchors };