import React from 'react';
// import { Nav } from 'react-bootstrap';
import '../css/login.css'
import { Link } from 'react-router-dom'
import { LoginMe } from '../services/LoginMe';
import { getSession } from '../services/getSession'
import { instanceOf } from 'prop-types';
import {withCookies, Cookies } from 'react-cookie';
// import loader from '../images/loader.gif'
class Login extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {
        super(props);
        this.state = {
            isloggedin: false
        };
    }
    handleChange = async (e) => {
        await this.setState({ [e.target.name]: e.target.value })
        this.setState({ successMessage: "" })
    }
    formSubmit = (e) => {
        e.preventDefault();
        this.setState({ isloading: true, successMessage: "" })
        var data = {
            password: this.state.password,
            email: this.state.email
        }
        LoginMe(data).then((res) => {
            if (res.status === 200) {
                console.log(res.data.token)
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization':"Bearer " + res.data.token
                  }
                getSession(headers)
                .then((response) => {
                    console.log(response.data)
                    const {cookies} = this.props
                    cookies.set("session", response.data.session, {  maxAge: 3600, secure:true, sameSite:"none"})
                    // cookies.set("authenticated", response.data.authenticated, { maxAge: 3600 })
                    // cookies.set("userProfile", response.data.userProfile, { maxAge: 3600, sameSite:"none" })
                    this.setState({ successMessage: "Login Successful", isloggedin: true, isloading: false })
                })
                .catch((err) => {
                    console.log(err)
                    this.setState({ successMessage: "Something went wrong", isloading: false})
                })
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
    render() {
        return (
            <div>
                {/* {this.state.isloading ? (<div className="loader"><img src = {loader} alt="loader"/></div>) : ''} */}
                <div className="logsection signup">
                    <div className="container">
                        <div className="row itemcenter">
                            <div className="col-sm-6 center ">
                                <h4 className="sectionwel">WELCOME TO <br />DESIGNMOCHA.</h4>
                                <Link to="/" className="btn my-btn sbtn">Back To Home </Link>
                            </div>
                            <div className="col-sm-6 form">
                                <div className="lflex">
                                    <form onSubmit={this.formSubmit}>
                                        {!this.state.successMessage ? '' : (<p className="text-color">{this.state.successMessage}</p>)}
                                        {!this.state.isloading ? '' : (<p className="text-color">Loading please wait..</p>)}
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="fotmlab">EMAIL ADDRESS</label>
                                            <input type="text" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="jdoe123@gmail.com" onChange={this.handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1" className="fotmlab">PASSWORD</label>
                                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="*********" onChange={this.handleChange} required />
                                        </div><br />
                                        <button type="submit" className="btn form" disabled={this.state.isloading}>Login</button>
                                        <Link to="/register" className="btn form a">If you haven't member </Link>
                                        <Link to='reset-password' className='d-block text-color mt-4'>Forgot password ?</Link>
                                    </form>
                                    {/* <span className="flow"> or connect with -
                                        <Nav.Link to="/"><i className="cl fa fa-facebook" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link to="/"><i className="cl fa fa-instagram" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link to="/"><i className="cl fa fa-twitter" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link to="/"><i className="cl fa fa-pinterest-p" aria-hidden="true"></i></Nav.Link>
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
export default withCookies(Login);
