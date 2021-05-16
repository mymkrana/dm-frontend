import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../css/contact.css'
class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="contact-page">
                <Header />
                <div className="container">
                    <div className="row row-eq-height">
                        <div className="col-sm-6">
                            <div className="cinfo">
                                <p><a href="phone:9739000486">Call us at +91-9739000486</a></p>
                                <p><a href="mailto:hello.designmocha@breathingcrafts.com">Mail us at hello.designmocha@breathingcrafts.com</a></p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact