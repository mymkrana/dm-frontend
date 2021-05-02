import React from 'react';
import { Link } from 'react-router-dom';
import siteLogo from '../images/logo-dark.png'
import toggleMenu from '../images/menu.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <header>
                <div id="site-header">
                    <Link to="/">
                        <div className="site-logo">
                            <img src={siteLogo} alt="logo" />
                        </div>
                    </Link>
                    <div className='nav-toggle'>
                        <img src={toggleMenu} alt="nav-menu" />
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
