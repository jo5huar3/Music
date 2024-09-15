import React, { useState } from 'react';
import {
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Nav,
} from 'reactstrap';

function AdminDDAnchors() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);



  return (

        <><NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    Admin
                </DropdownToggle>
                <DropdownMenu dark='false'>
                    <DropdownItem header dark='false'>
                    <NavLink tag={Link} className="text-dark" to="/song">Song</NavLink>
                    </DropdownItem>
                    <DropdownItem disabled>
                    <NavLink tag={Link} className="text-dark" to="/song">Song</NavLink>
                    </DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </NavItem></>
    
  );
}

export { AdminDDAnchors };