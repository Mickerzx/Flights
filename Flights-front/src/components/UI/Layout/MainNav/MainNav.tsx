import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {NavLink as RouterNavLink} from 'react-router-dom'

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [admin, setAdmin] = useState(false);


    return (
        <div>
            <Navbar light expand="md">
                <NavbarBrand className="text-white" tag={RouterNavLink} to='/'>Flights</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        {admin ? <NavItem>
                            <NavLink className="text-white" tag={RouterNavLink} to='/flight/new'>Create new
                                flight</NavLink>
                        </NavItem> : <NavItem>
                            <NavLink onClick={() => setAdmin(true)} className="text-white" tag={RouterNavLink}
                                     to='/admin'>Admin</NavLink>
                        </NavItem>}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default MainNav;