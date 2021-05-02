import React, { useEffect } from 'react';
import App from '../App';
import Register from '../component/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    withRouter
} from 'react-router-dom'
import Login from '../component/Login';
import ForgotPass from '../component/ForgotPass';
import CreateProfile from '../component/CreateProfile';
function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)
export const Routes = () => {
    return (
        <div>
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route exact path='/' component={App}></Route>
                        <Route exact path='/register' component={Register}></Route>
                        <Route exact path='/login' component={Login}></Route>
                        <Route exact path='/reset-password' component={ForgotPass}></Route>
                        <Route path="/create-profile" render={(props) => <CreateProfile {...props}/>}/>
                    </Switch>
                </ScrollToTop>
            </Router>
        </div>
    )
}





// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// class Routes extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         return (
//             <div className="wrapper">
//                 <Router>

//                 </Router>
//             </div>

//         );
//     }
// }

// Routes.propTypes = {};

// export default Routes;
