import React from 'react';
// import { Nav } from 'react-bootstrap';
import '../css/login.css'
import { Link, Redirect } from 'react-router-dom'
import { LoginMe } from '../services/LoginMe';
import { getSession } from '../services/getSession'
import { instanceOf } from 'prop-types';
import {withCookies, Cookies } from 'react-cookie';
import {Nav} from 'react-bootstrap'
// import loader from '../images/loader.gif'
class Login extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {
        super(props);
        this.state = {
            isloggedin: false,
            Redirect: "false"
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
                .then(async (response) => {
                    console.log(response.data)
                    const {cookies} = this.props
                    cookies.set("session", response.data.session, {  maxAge: 3600, secure:true, sameSite:"none"})
                    // cookies.set("authenticated", response.data.authenticated, { maxAge: 3600 })
                    cookies.set("userProfile", response.data.userProfile, { maxAge: 3600, secure:true, sameSite:"none" })
                    if(this.props.location.state) {
                        if(this.props.location.state.redirect) {
                            await this.setState({Redirect: "true"})
                        }
                    }
                    await this.setState({ successMessage: "Login Successful", isloggedin: true, isloading: false })
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
        if(this.state.Redirect==="false") {
            console.log(this.state.Redirect)
            if(this.state.isloggedin===true) {
                return <Redirect to='/explore' />
            }
        }
        if(this.state.Redirect!=="false") {
            return <Redirect to={this.props.location.state.rpath} />
        }
        return (
            <div>
                {/* {this.state.isloading ? (<div className="loader"><img src = {loader} alt="loader"/></div>) : ''} */}
                <div className="logsection signup">
                    <div className="container">
                        <div className="row itemcenter">
                            <div className="col-sm-6 center ">
                                <h4 className="sectionwel">WELCOME TO <br />DESIGNMOCHA.</h4>
                                <Nav.Link href="/" className="btn my-btn sbtn">Back To Home </Nav.Link>
                            </div>
                            <div className="col-sm-6 form">
                                <div className="lflex">
                                    <form onSubmit={this.formSubmit} autoComplete="off">
                                        {!this.state.successMessage ? '' : (<p className="text-color">{this.state.successMessage}</p>)}
                                        {!this.state.isloading ? '' : (<p className="text-color">Loading please wait..</p>)}
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="fotmlab">EMAIL ADDRESS</label>
                                            <input type="text" autoComplete="off" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="jdoe123@gmail.com" onChange={this.handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1" className="fotmlab">PASSWORD</label>
                                            <input type="password" autoComplete="new password" name='password' className="form-control" id="exampleInputPassword1" placeholder="*********" onChange={this.handleChange} required />
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
