import React, { PureComponent } from 'react'
import Footer from './Footer'
import Header from './Header'
import auser from '../images/auser.png'
import { Card } from 'react-bootstrap'
import '../css/ework.css'
class AboutUs extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div className="about wrapper">
                <Header />
                <div className="acontent">
                <div className="abanner top-banner">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="container-fluid"><h3>The team</h3></div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Img src={auser} />
                                    <Card.Body>
                                        <h4>John Doe</h4>
                                        <p>
                                        Gaurav Raheja is the co-founder and the CEO of Designmocha. A design activist with an experience of almost 2 decades. Has worked multiple fashion companies in the country and has been instrumental in launchmany celebrity and non-celebrity brands as well. When not working, he can be found playing in the squash court. Inspite of being a fashion designer himself, he keeps his wardrobe pretty minimal. You can easily recognize him with his black t-shirt most of the times
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Img src={auser} />
                                    <Card.Body>
                                        <h4>John Doe</h4>
                                        <p>
                                        Gaurav Raheja is the co-founder and the CEO of Designmocha. A design activist with an experience of almost 2 decades. Has worked multiple fashion companies in the country and has been instrumental in launchmany celebrity and non-celebrity brands as well. When not working, he can be found playing in the squash court. Inspite of being a fashion designer himself, he keeps his wardrobe pretty minimal. You can easily recognize him with his black t-shirt most of the times
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Img src={auser} />
                                    <Card.Body>
                                        <h4>John Doe</h4>
                                        <p>
                                        Gaurav Raheja is the co-founder and the CEO of Designmocha. A design activist with an experience of almost 2 decades. Has worked multiple fashion companies in the country and has been instrumental in launchmany celebrity and non-celebrity brands as well. When not working, he can be found playing in the squash court. Inspite of being a fashion designer himself, he keeps his wardrobe pretty minimal. You can easily recognize him with his black t-shirt most of the times
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5">
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Img src={auser} />
                                    <Card.Body>
                                        <h4>John Doe</h4>
                                        <p>
                                        Gaurav Raheja is the co-founder and the CEO of Designmocha. A design activist with an experience of almost 2 decades. Has worked multiple fashion companies in the country and has been instrumental in launchmany celebrity and non-celebrity brands as well. When not working, he can be found playing in the squash court. Inspite of being a fashion designer himself, he keeps his wardrobe pretty minimal. You can easily recognize him with his black t-shirt most of the times
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Img src={auser} />
                                    <Card.Body>
                                        <h4>John Doe</h4>
                                        <p>
                                        Gaurav Raheja is the co-founder and the CEO of Designmocha. A design activist with an experience of almost 2 decades. Has worked multiple fashion companies in the country and has been instrumental in launchmany celebrity and non-celebrity brands as well. When not working, he can be found playing in the squash court. Inspite of being a fashion designer himself, he keeps his wardrobe pretty minimal. You can easily recognize him with his black t-shirt most of the times
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Img src={auser} />
                                    <Card.Body>
                                        <h4>John Doe</h4>
                                        <p>
                                        Gaurav Raheja is the co-founder and the CEO of Designmocha. A design activist with an experience of almost 2 decades. Has worked multiple fashion companies in the country and has been instrumental in launchmany celebrity and non-celebrity brands as well. When not working, he can be found playing in the squash court. Inspite of being a fashion designer himself, he keeps his wardrobe pretty minimal. You can easily recognize him with his black t-shirt most of the times
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutUs