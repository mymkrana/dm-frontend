import React, { PureComponent } from 'react'
import { Jumbotron, Container, Accordion, Card } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import '../css/ework.css'
class Faq extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="faq">
                <Header />
                <div className="faq-info">
                    <Jumbotron fluid>
                        <Container>
                            <h1 className="font-arial">Frequently Asked Questions</h1>
                        </Container>
                    </Jumbotron>
                    <div className="faq-questions container">
                        <div className="row">
                            <div className="col-sm-10 mx-auto">
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-arial">
                                            Q: How does this work?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="font-arial">Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className="font-arial">
                                            Q: What is Bootstrap 4?
                                </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className="font-arial">Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2" className="font-arial">
                                            Q. What is another question?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2" >
                                            <Card.Body className="font-arial">Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3" className="font-arial">
                                            Q. What is another question?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3" >
                                            <Card.Body className="font-arial">Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Faq