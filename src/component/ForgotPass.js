import React from 'react';
import { Nav } from 'react-bootstrap';
import '../css/login.css'
import { Link } from 'react-router-dom'
import { ResetPass } from '../services/ResetPass';
// import loader from '../images/loader.gif'
class ForgotPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleChange = async (e) => {
        await this.setState({ [e.target.name]: e.target.value })
        this.setState({ successMessage: "" })
    }
    formSubmit = async (e) => {
        e.preventDefault();
        await this.setState({ isloading: true, successMessage: "" })
        var data = {
            username: this.state.username
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
    render() {
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
                                        <div class="form-group mb-5">
                                            <label for="exampleInputEmail1" class="fotmlab">USERNAME</label>
                                            <input type="text" name='username' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username" onChange={this.handleChange} required />
                                        </div>
                                        <button type="submit" class="btn form" disabled={this.state.isloading}>Forgot Password</button>
                                        <Link to="/login" class="btn form a">Login</Link>
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
export default ForgotPass;
