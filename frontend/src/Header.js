import React from 'react';

import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                   <a href="#">Not-yet-named-site</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/">Home</NavItem>
            </Nav>
        </Navbar>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

