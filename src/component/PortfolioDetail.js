import React, { PureComponent } from 'react'
import '../css/ework.css'
import Footer from './Footer'
import Header from './Header'
import { Card } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class PortfolioDetail extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isAthenticated: false
        }
    }
    render() {
        return (
            <div className="portfolio-details">
                <Header />
                <div className="user-detail mt-3 container">
                    <Card>
                        <Card.Body>
                            <div className="user-flex py-3">
                                <div className="user-av"><i className="fa fa-user fa-2x"></i></div>
                                <div><h2 className="font-arial"><b className="font-arial">Designguru</b></h2></div>
                                <p className="font-arial">Logo and Graphic Designers</p>
                                <div className="mt-4">
                                    <h5 className="text-center"><b className="font-arial">Design for me is :</b></h5>
                                    <p className="font-arial text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                </div>
                                <div className="mt-4">
                                    <h5 className="text-center"><b className="font-arial">Areas of Expertise :</b></h5>
                                    <p className="font-arial text-center">Logo Design, Brand Style Guides, Brochure Design, Book Cover Design, Catalog Design,<br />resentation Design, Infographic Design, Logo Animations.</p>
                                </div>
                                <div className="poptions">
                                    <i className="fa fa-lightbulb-o px-2 float-left pt-1 fa-2x"></i><p className="font-arial float-left pr-3">0</p>
                                    <i className="fa fa-eye px-2 float-left pt-1 fa-2x"></i><p className="font-arial float-left pr-3">0</p>
                                    <i className="fa fa-heart px-2 float-left pt-1 fa-2x"></i><p className="font-arial float-left pr-3">0</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="container portfolio-info mt-4">
                    <div className="row pflex">
                        <div className="col-sm-8 col">
                            <OwlCarousel className='owl-theme' loop margin={10} items={1} nav autoplay>
                                <div className='item'>
                                    <h4>1</h4>
                                </div>
                                <div className='item'>
                                    <h4>2</h4>
                                </div>
                                <div className='item'>
                                    <h4>3</h4>
                                </div>
                                <div className='item'>
                                    <h4>4</h4>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div className="col-sm-4 col pdesc">
                            Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s,
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PortfolioDetail