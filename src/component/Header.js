import React from 'react';
import { Link } from 'react-router-dom';
import siteLogo from '../images/logo-dark.png'
import toggleMenu from '../images/menu.png'
import { Nav, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <header className="sticky-top" id="stickytop">
                <div id="site-header">
                    <Link to="/">
                        <div className="site-logo">
                            <img src={siteLogo} alt="logo" />
                        </div>
                    </Link>
                    <div className='nav-toggle'>
                        <img src={toggleMenu} alt="nav-menu" />
                    </div>
                    <div className="slide-menu">
                            <Navbar id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <LinkContainer to="/">
                                        <Nav.Link className="text-color px-3">Home</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/explore">
                                        <Nav.Link className="text-color px-3">Explore Work</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/dm-cafe">
                                        <Nav.Link className="text-color px-3">DM Cafe</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/">
                                        <Nav.Link className="text-color px-3">About Us</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/">
                                        <Nav.Link className="text-color px-3">Say Hello</Nav.Link>
                                    </LinkContainer>
                                </Nav>
                            </Navbar>
                    </div>
                    </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
