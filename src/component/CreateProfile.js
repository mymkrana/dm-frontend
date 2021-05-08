import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Nav } from 'react-bootstrap'
import '../css/profile.css'
import logo from '../images/logo-dark.png'
import { getCategories } from '../services/getCategories';
import csc from 'country-state-city'
class CreateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {catArr: [], Scat: [], SubCat: [], SubSelected: [], countries: [], states: []};
    }
    async componentDidMount() {  
        var countries = csc.getAllCountries()
        await this.setState({countries: countries})
        getCategories()
            .then(async (res) => {
                await this.setState({ categories: res })
                var catArr = []
                for (let cat in res) {
                    catArr.push(cat)
                }
                this.setState({ catArr: catArr })
            })
    }
    handleCheck = async (e) => {
        if(!this.state.Scat.includes(e.target.name)) {
            var Scat = [...this.state.Scat]
            Scat.push(e.target.name)
            await this.setState({Scat: Scat})
            var SubCat = []
            this.state.Scat.map((cat) => {
                this.state.categories[cat].map((subcat) => {
                    SubCat.push(subcat)
                    return subcat
                })
                return cat
            })
            await this.setState({SubCat: SubCat})
        }
        else {
            var Srcat = [...this.state.Scat]
            var rmindex = Srcat.findIndex((item) => (item === e.target.name))
            Srcat.splice(rmindex, 1)
            await this.setState({Scat: Srcat})
            var eSubCat = []
            this.state.Scat.map((cat) => {
                this.state.categories[cat].map((subcat) => {
                    eSubCat.push(subcat)
                    return subcat
                })
                return cat
            })
            await this.setState({SubCat: eSubCat})
        }
    }
    handleSubCat = async (e) => {
        if(e.target.checked) {
            const Subselected = this.state.SubSelected
            Subselected.push(e.target.name)
            await this.setState({Subselected: Subselected})
            console.log(this.state.Subselected)
        }
        else {
            const Subselected = this.state.SubSelected
            var rindex = Subselected.findIndex((item) => {return item === e.target.name})
            Subselected.splice(rindex, 1)
            await this.setState({Subselected: Subselected})
            console.log(this.state.Subselected)
        }
    }
    countrySelect = async (e) => {
       var states = await csc.getStatesOfCountry(e.target.selectedOptions[0].getAttribute('data-iso'))
       console.log(states)
       await this.setState({states: states})
    }
    render() {
        // if(!this.props.location.state) {
        //     return(<Redirect to='/register' />)
        // }
        var fullname = 'SahilDesigns'
        if (this.props.location.state) {
            fullname = this.props.location.state.fullname;
        }
        return (
            <div className="cprofile">
                <div className="container-fluid cmain p-0">
                    <div className='row frow'>
                        <div className="col-sm-3 paside order-sm-12">
                            <div className="usr-profile pt-5 pb-2">
                                <div className='avatar'>
                                    <span className='davatar'>{fullname[0]}</span>
                                </div>
                                <p className="font-roboto text-center mb-0 weight-600">Add an avatar</p>
                                <div className='ch-image'>
                                    <button className='btn btn-av font-roboto'>Choose image</button>
                                </div>
                                <p className='text-center font-roboto mt-2 text-14'>&gt;or choose one of our defaults</p>
                            </div>
                            <hr className='hr-white' />
                            <div className='ctoggle'>
                                <div href='/' className="icon" id="ctoggle">
                                    <i className="fa fa-bars"></i>
                                </div></div>
                            <div className='ptabs' id='ptabs'>
                                <ul className="nav nav-pills" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active text-color" data-toggle="pill" href="#pbasic">Profile Basics</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-color" data-toggle="pill" href="#djourney">Design Journy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-color" data-toggle="pill" href="#mwork">My Work</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-color" data-toggle="pill" href="#pstatus">Profile Status</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-color" data-toggle="pill" href="#bpayment">Billing & Payment</a>
                                    </li>
                                </ul>
                            </div>
                            <Link className="text-color lgout">Logout</Link>
                        </div>
                        <div className="col-sm-9 order-sm-1">
                            <div className="clogo">
                                <Link to='/'><img src={logo} alt="logo" /></Link>
                            </div>
                            <div className="tab-content container">
                                <div id="pbasic" className="container tab-pane active"><br />
                                    <div>
                                        <h3 className="weight-600">Welcome, {(fullname !== '') ? fullname : ''}<br />Let's create your profile..</h3>
                                        <p>Let other get to know you better!</p>
                                        <div className="form-1">
                                            <Form>
                                                <Row>
                                                    <Col sm={6}>
                                                        <Form.Label>Full Name</Form.Label>
                                                        <Form.Control placeholder="Sahil Mahajan" />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control placeholder="sahil@designmocha.com" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <Form.Label>Phone</Form.Label>
                                                        <Form.Control placeholder="999 999 9999" />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Form.Label>Gender</Form.Label>
                                                        <Form.Control as="select" defaultValue="select">
                                                            <option>Select Gender</option>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Others</option>                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <Form.Label>Date of Birth</Form.Label>
                                                        <Form.Control type="date" placeholder="First name" />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Control as="select" name="country" defaultValue="select" onChange={this.countrySelect}>
                                                            <option>Select Country</option>
                                                            {this.state.countries.map((country) => {
                                                                return(<option data-iso={country.isoCode} value={country.name}>{country.name}</option>)
                                                            })}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <Form.Label>Address</Form.Label>
                                                        <Form.Control placeholder="Your Full Address" />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Form.Label>State</Form.Label>
                                                        <Form.Control as="select" defaultValue="select">
                                                            <option>Select State</option>
                                                            {this.state.states.map((state) => {
                                                                return(<option value={state.stateCode}>{state.name}</option>)
                                                            })}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <Form.Label>Pincode</Form.Label>
                                                        <Form.Control placeholder="Enter Pincode" />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control placeholder="Enter City Name" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                    </Col>
                                                    <Col>
                                                        <button className="mt-5 btn my-btn cbtn text-color float-right">Submit</button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                                <div id="djourney" className="container tab-pane fade"><br />
                                    <h3 className="weight-600">Sahil Mahajan / Design Journey</h3>
                                    <div className="form-2">
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Add user name</Form.Label>
                                                    <Form.Control />
                                                    <span>This is the second thing that others would see after your avatar. So please make sure it is catchy enough for others to remember eg.  Logoninja, Artistik, Quickart, etc..  Please avoid using your name here. </span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Add your profile description</Form.Label>
                                                    <Form.Control />
                                                    <span>This is the third thing that others would see next to your user name. This should briefely tell others on what do you have to offer.  eg. “modern logo designs in 24 hours”,“real hand painted artworks only”, “High quality video editing”. Max 50 alphabets. </span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Label>How would you define your design sensibility/ style</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                    <span>We believe every designer has his/her own way of approaching design. Some make it arty, white others make it more detail oriented, etc...this data will help us in sharpening your profile and the getting you the right work.Max 300 words. </span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Your design journey so far</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                    <span>Brief description. max 600 words.</span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col>
                                                    <a className="nav-link text-color mt-5 btn my-btn cbtn text-color float-right" data-toggle="pill" href="#djourney-2">Continue</a>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                                <div id="djourney-2" className="container tab-pane fade"><br />
                                    <h3 className="weight-600">Sahil Mahajan / Design Journey</h3>
                                    <div className="form-2 mt-2">
                                        <Form>
                                            <h5 className='mt-3 mb-0'>What Categories do you design for</h5>
                                            <span>You can select more than one category also</span>
                                            <Row className='mt-2'>
                                                {this.state.catArr.map((cat) => {
                                                    return(<Col sm={3} key={cat}>
                                                        <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id={cat.split(" ")[0]} name={cat} onChange={this.handleCheck}/>
                                                        <label htmlFor={cat.split(" ")[0]} className='form-label'>{cat}</label>
                                                        </div>
                                                    </Col>)
                                                })}
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Check type="checkbox" label="Others" />
                                                </Col>
                                            </Row>
                                            <h5 className='mt-3 mb-0'>Select the sub-categories you wish to offer your services in</h5>
                                            <span>You can select more than one category also</span>
                                            <Row className='mt-2'>
                                            {this.state.SubCat.map((cat) => {
                                                    return(<Col sm={3} key={cat}>
                                                        <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" key={cat} id={cat.split(" ")[0]} name={cat} onChange={this.handleSubCat}/>
                                                        <label htmlFor={cat.split(" ")[0]} className='form-label'>{cat}</label>
                                                        </div>
                                                    </Col>)
                                                })}
                                            </Row>
                                            <hr className="chr"></hr>
                                            <h5>Online Presence</h5>
                                            <Row>
                                                <Col>
                                                    <Form.Label><b>Personal Website</b></Form.Label>
                                                    <Form.Control />
                                                    <span>Your home page, blog or company site.</span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Label><b>Portfolio URL</b></Form.Label>
                                                    <Form.Control />
                                                    <span>Share your current online presence like Behance, Dribbble, etc.</span>
                                                    <br />
                                                    <Nav.Link href='/'>+ Add</Nav.Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col>
                                                    <button className="mt-5 btn my-btn cbtn text-color float-right">Submit</button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                                <div id="mwork" className="container tab-pane fade"><br />
                                    <h3 className="weight-600">Designguru / My Work</h3>
                                    <p></p>
                                    <div className="form-4">
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Write your portfilio title </Form.Label>
                                                    <Form.Control />
                                                    <span>Write your portfilio title </span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Add your portfolio description</Form.Label>
                                                    <Form.Control as="textarea" rows={5} />
                                                    <span>Write your portfilio description </span>
                                                </Col>
                                            </Row>
                                            <Row className='mt-3'>
                                                <Col>
                                                    <button className="mt-5 p-2 btn my-btn cbtn text-color">choose image</button>
                                                    <br /><br />
                                                    <Nav.Link href='/'>+ Add</Nav.Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col>
                                                    <button className="mt-5 btn my-btn cbtn text-color float-right">Submit</button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                                <div id="pstatus" className="container tab-pane fade"><br />
                                    <h3>Menu 2</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                                <div id="bpayment" className="container tab-pane fade"><br />
                                    <h3>Menu 2</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateProfile.propTypes = {};

export default CreateProfile;