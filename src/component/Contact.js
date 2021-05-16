import React from 'react'
import Footer from './Footer'
import Header from './Header'

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
                <Footer />
            </div>
        )
    }
}

export default Contact