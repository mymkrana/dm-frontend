import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import '../css/register.css'
import { RegisterMe } from '../services/RegisterMe';
var Cookies = require("js-cookie")
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isloading: false,
            successMessage: false,
            show: false,
            accept: false,
            registered: false,
        };
    }
    handleShow = () => {
        if (!this.state.accept) {
            this.setState({ show: true, accept: true })
        }
        else {
            this.setState({ show: false, accept: false })
        }
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    handleChange = async (e) => {
        await this.setState({ [e.target.name]: e.target.value })
        this.setState({ successMessage: "" })
    }
    formSubmit = (e) => {
        e.preventDefault();
        if (this.state.password !== this.state.cpassword) {
            this.setState({ successMessage: "Password doesn't match" })
        }
        else if(this.state.username.split(" ")[1]){
            this.setState({ successMessage: "Incorrect username" })
        }
        else {
            this.setState({ successMessage: "" })
            this.setState({ isloading: true })
            var data = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.password
            }
            RegisterMe(data).then(async (res) => {
                this.setState({ isloading: false })
                if (res.status === 201) {
                    await Cookies.remove("session")
                    await Cookies.remove("userProfile")
                    var in60Minutes = 1/24;
                    Cookies.set("username", this.state.username, {expires: in60Minutes})
                    this.setState({ successMessage: "Registration Successful", registered: true })
                }
            }).catch((err) => {
                if (err.response) {
                    if (err.response.data.username) {
                        this.setState({ successMessage: "This username is already taken", isloading: false })
                    }
                    else if (err.response.data.email) {
                        this.setState({ successMessage: err.response.data.email, isloading: false })
                    }
                    else {
                        this.setState({ successMessage: "something went wrong", isloading: false })
                    }
                }
                else {
                    this.setState({ successMessage: "something went wrong", isloading: false })
                }
            })
        }
    }
    render() {
        if (this.state.registered) {
            return <Redirect
            to={{
                pathname: "/create-profile",
                state: { username: this.state.username }
            }}
        />
        }
        return (
            <div>
                {/* {this.state.isloading ? (<div className="loader"><img src = {loader} alt="loader"/></div>) : ''} */}
                <div className="rsection signup">
                    <div className="container">
                        <div className="row itemcenter">
                            <div className="col-sm-6 center ">
                                <div className="welcome">
                                    <h4 className="sectionwel">WELCOME TO <br />DESIGNMOCHA.</h4>
                                </div>
                                <a href="/" className="btn my-btn sbtn">Back To Home </a>
                            </div>
                            <div className="col-sm-6 form">
                                <div className="rflex">
                                    <form onSubmit={this.formSubmit}>
                                        {!this.state.successMessage ? '' : (<p className="text-color">{this.state.successMessage}</p>)}
                                        {!this.state.isloading ? '' : (<p className="text-color">Loading please wait..</p>)}
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className="fotmlab">USERNAME</label>
                                            <input type="text" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="FullName" placeholder="JohnDesigns" required onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className="fotmlab"> EMAIL ADDRESS</label>
                                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="Email" placeholder="jdoe123@gmail.com" required onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1" className="fotmlab">PASSWORD</label>
                                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="*********" required onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1" className="fotmlab">CONFIRM PASSWORD</label>
                                            <input type="password" name="cpassword" className="form-control" id="exampleInputPassword1" placeholder="*********" required onChange={this.handleChange} />
                                        </div>
                                        <br />
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Privacy Policy, &nbsp; Legal Policy, &nbsp; Terms of Service"
                                            className="text-color"
                                            name="accept"
                                            required
                                            onClick={this.handleShow}
                                        />
                                        <button type="submit" className="btn form" disabled={this.state.isloading}>SIGN ME UP</button>
                                        <Link to="/login" className="btn form a">I am already a member</Link>
                                    </form>
                                    {/* <span className="flow"> or connect with -
                                        <Nav.Link href="/"><i className="cl fa fa-facebook" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link href="/"><i className="cl fa fa-instagram" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link href="/"><i className="cl fa fa-twitter" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link href="/"><i className="cl fa fa-pinterest-p" aria-hidden="true"></i></Nav.Link>
                                    </span> */}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Modal centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Privacy Policy, Legal Policy, Terms of Service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Modal.Body>
                    <Modal.Footer>
                        <Button className="my-btn" onClick={this.handleClose}>
                            I Understand
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

Register.propTypes = {};

export default Register;
