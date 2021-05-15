import React, { PureComponent } from 'react'
import '../css/ework.css'
import Footer from './Footer'
import Header from './Header'
import { Card, Form, Nav } from 'react-bootstrap'
import { getPortfolios } from '../services/getPortfolios'
import { getAuth } from '../services/getAuth'
import { Redirect } from 'react-router-dom'
class ExploreWork extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            portfolios: [],
            isAuthenticated: false
        }
    }
    componentDidMount() {
        var auth = getAuth()
        if(auth === false) {
            this.setState({isAuthenticated: "false"}) 
        }
        else {
            this.setState({isAuthenticated: true})
        }
        getPortfolios()
            .then((res) => {
                var portfolios = []
                res.data.map((user) => {
                    for (let key in user) {
                        user[key].map((portfolio) => {
                            portfolio.uid = key;
                            portfolios.push(portfolio)
                            return true
                        })
                    }
                    return true
                })
                this.setState({ portfolios: portfolios })
                console.log(portfolios)
            }).catch((err) => {
                this.setState({error: "something went wrong"})
            })
    }
    render() {
        if (this.state.isAuthenticated==="false") {
            return <Redirect
                to={{
                    pathname: "/login",
                    state: { redirect: true, rpath: this.props.location.pathname }
                }}
            />
        }
        return (
            <div className="ework">
                <Header />
                <div className="e-content">
                    <div className="top-banner">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="container-fluid"><h3>Discover India's best design &amp; creative talent</h3></div>
                            </div>
                        </div>
                    </div>
                    <div className="top-filters mt-5 mb-5 px-5">
                        <div className="efilters">
                            <Form.Control as="select" defaultValue="Choose..." className="font-arial">
                                <option className="font-arial">inspiring</option>
                                <option className="font-arial">likes</option>
                                <option className="font-arial">views</option>
                            </Form.Control>
                        </div>
                        <div className="ecats">
                            <Nav defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link className="font-arial active" href="/home">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className="font-arial" eventKey="link-1">Branding</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className="font-arial" eventKey="link-2">Fashion Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className="font-arial" eventKey="link-2">Artistic Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className="font-arial" eventKey="link-2">Digital Design</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="esearch">
                            <Form.Control type="text" placeholder="search tags" className="font-arial"/>
                        </div>
                    </div>
                    <div className="blog-area">
                        <div className="row ml-0">
                            {
                                this.state.portfolios.map((portfolio) => {
                                    return (
                                        <div className="col-sm-3 mb-2">
                                            <a href={"/portfolio/" + portfolio.portfolio_id} >
                                            <Card>
                                                <Card.Body className="p-0 rounded"><img className="rounded" alt="portfolio img" src={portfolio.media_urls[0]} width="100%"/></Card.Body>
                                            </Card>
                                            <Card.Footer className="px-0">
                                                <div className="emeta">
                                                    <div className="euser">
                                                        <i className="fa fa-user px-2 float-left pt-1"></i><p className="font-arial float-left">Designmocha</p>
                                                    </div>
                                                    <div className="eoptions">
                                                        <i className="fa fa-lightbulb-o px-2 float-left pt-1"></i><p className="font-arial float-left">0</p>
                                                        <i className="fa fa-eye px-2 float-left pt-1"></i><p className="font-arial float-left">{portfolio.views}</p>
                                                        <i className="fa fa-heart px-2 float-left pt-1"></i><p className="font-arial float-left">{portfolio.likes}</p>
                                                        <i className="fa fa-comment px-2 float-left pt-1"></i><p className="font-arial float-left">0</p>
                                                    </div>
                                                </div>
                                            </Card.Footer>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ExploreWork