import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/login.css'
import { Link } from 'react-router-dom'
import { ResetPass } from '../services/ResetPass';
// import loader from '../images/loader.gif'
class ForgotPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false
        };
    }
    handleChange = async (e) => {
        await this.setState({ [e.target.name]: e.target.value })
        this.setState({ successMessage: "" })
    }
    formSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            await this.setState({ isloading: true, successMessage: "" })
            var data = {
                email: this.state.email
            }
            ResetPass(data).then((res) => {
                this.setState({ isloading: false })
                if (res.status === 200) {
                    this.setState({ successMessage: "Check your email for password reset link" })
                }
    
            }).catch((err) => {
                if (err.response) {
                    if (err.response.data.general) {
                        this.setState({ successMessage: err.response.data.general, isloading: false })
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
        this.setState({validated: true})
    }
    render() {
        return (
            <div>
                {/* {this.state.isloading ? (<div className="loader"><img src = {loader} alt="loader"/></div>) : ''} */}
                <div class="logsection signup">
                    <div class="container">
                        <div class="row itemcenter">
                            <div class="col-sm-6 center ">
                                <h4 class="sectionwel">WELCOME TO <br />DESIGNMOCHA.</h4>
                                <a href="/" className="btn my-btn sbtn">Back To Home </a>
                            </div>
                            <div class="col-sm-6 form">
                                <div className="lflex">
                                    <Form noValidate validated={this.state.validated} onSubmit={this.formSubmit}>
                                        {!this.state.successMessage ? '' : (<p className="text-color">{this.state.successMessage}</p>)}
                                        {!this.state.isloading ? '' : (<p className="text-color">Loading please wait..</p>)}
                                        <Form.Group controlId="validationCustom01">
                                            <label htmlFor="exampleInputEmail1" class="fotmlab">Email</label>
                                            <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" onChange={this.handleChange} required />
                                            <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
                                        </Form.Group>
                                        <button type="submit" class="btn form" disabled={this.state.isloading}>Forgot Password</button>
                                        <Link to="/login" class="btn form a">Login</Link>
                                    </Form>
                                    {/* <span class="flow"> or connect with -
                                        <Nav.Link to="/"><i class="cl fa fa-facebook" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link to="/"><i class="cl fa fa-instagram" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link to="/"><i class="cl fa fa-twitter" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link to="/"><i class="cl fa fa-pinterest-p" aria-hidden="true"></i></Nav.Link>
                                    </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ForgotPass;
