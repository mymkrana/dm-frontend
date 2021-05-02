import React from 'react';
import { Nav } from 'react-bootstrap';
import '../css/login.css'
import { Link, Redirect } from 'react-router-dom'
import { LoginMe } from '../services/LoginMe';
// import loader from '../images/loader.gif'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isloggedin: false
        };
    }
    handleChange = async (e) => {
        await this.setState({ [e.target.name]: e.target.value })
        console.log("current data", this.state)
        this.setState({ successMessage: "" })
    }
    formSubmit = (e) => {
        e.preventDefault();
        this.setState({ isloading: true })
        var data = {
            password: this.state.password,
            email: this.state.email
        }
        LoginMe(data).then((res) => {
            console.log("sucess", res)
            this.setState({ isloading: false })
            if (res.status === 200) {
                this.setState({ successMessage: "Login Successful", isloggedin: true })
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
        if (this.state.isloggedin) {
            console.log("success")
            return <Redirect to='/' />
        }
        return (
            <div>
                {/* {this.state.isloading ? (<div className="loader"><img src = {loader} alt="loader"/></div>) : ''} */}
                <div class="logsection signup">
                    <div class="container">
                        <div class="row itemcenter">
                            <div class="col-sm-6 center ">
                                <h4 class="sectionwel">WELCOME TO <br />DESIGNMOCHA.</h4>
                                <Link to="/" class="btn my-btn sbtn">Back To Home </Link>
                            </div>
                            <div class="col-sm-6 form">
                                <div className="lflex">
                                    <form onSubmit={this.formSubmit}>
                                        {!this.state.successMessage ? '' : (<p className="text-color">{this.state.successMessage}</p>)}
                                        {!this.state.isloading ? '' : (<p className="text-color">Loading please wait..</p>)}
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="fotmlab">EMAIL ADDRESS</label>
                                            <input type="text" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="sahilmahajan@gmail.com" onChange={this.handleChange} required />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1" class="fotmlab">PASSWORD</label>
                                            <input type="password" name='password' class="form-control" id="exampleInputPassword1" placeholder="*********" onChange={this.handleChange} required />
                                        </div><br />
                                        <button type="submit" class="btn form" disabled={this.state.isloading}>Login</button>
                                        <Link to="/register" class="btn form a">If you haven't member </Link>
                                        <Link to='reset-password' className='d-block text-color mt-4'>Forgot password ?</Link>
                                    </form>
                                    <span class="flow"> or connect with -
                                        <Nav.Link to="/"><i class="cl fa fa-facebook" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link to="/"><i class="cl fa fa-instagram" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link to="/"><i class="cl fa fa-twitter" aria-hidden="true"></i></Nav.Link>
                                        <Nav.Link to="/"><i class="cl fa fa-pinterest-p" aria-hidden="true"></i></Nav.Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
export default Login;
