import React from 'react';
import instaimg from '../images/insta.png'
import twitterimg from '../images/twitter.png'
import fbimg from '../images/fb.png'
import { Nav } from 'react-bootstrap'
import logo from '../images/logo.png'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className='container'>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="footer-flex">
                                <div className="company-logo">
                                    <img src={logo} alt="img13" />
                                </div>
                                <p className='text-color'>A one of its kind marketplace specially created to promote India's hand picked design & creative talents.</p>
                                </div>
                            </div>
                            <div className="col-sm-4 pleft">
                                <h4>Menu</h4>
                                <Nav className="flex-column">
                                    <Nav.Link href="/home" className="text-color">Why Choose Us</Nav.Link>
                                    <Nav.Link href="/about" className="text-color">About Us</Nav.Link>
                                    <Nav.Link href="/contact" className="text-color">Contact US</Nav.Link>
                                    <Nav.Link href="/how-it-works" className="text-color">How It Works</Nav.Link>
                                    <Nav.Link className="text-color">FAQ</Nav.Link>
                                    <Nav.Link href="/privacy-policy" className="text-color">Privacy &amp; Policy</Nav.Link>
                                </Nav>
                            </div>
                            <div className="col-sm-4 pleft">
                                <h4>Follow Us</h4>
                                <Nav className="flex-column">
                                    <div className="vmiddle"><Nav.Link href="/instagram" className="text-color"><img src={instaimg} alt="instagram" className="social"></img>Instagram</Nav.Link></div>
                                    <div className="vmiddle"><Nav.Link href="/twitter" className="text-color"><img src={twitterimg} alt="twitter" className="social"></img>Twitter</Nav.Link></div>
                                    <div className="vmiddle"><Nav.Link href="/facebook" className="text-color"><img src={fbimg} alt="facebook" className="social"></img>Facebook</Nav.Link></div>
                                </Nav>
                            </div>
                        </div>
                        <center><hr class="line" />
                            <h5>Designmocha LLP © All rights reserved 2021</h5>
                        </center>
                    </div>
                </footer>
            </div>
        );
    }
}

Footer.propTypes = {};

export default Footer;
