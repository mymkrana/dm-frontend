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
import ExploreWork from '../component/ExploreWork';
import PortfolioDetail from '../component/PortfolioDetail';
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
                        <Route path="/login" render={(props) => <Login {...props}/>}/>
                        <Route exact path='/reset-password' component={ForgotPass}></Route>
                        <Route exact path='/explore' component={ExploreWork}></Route>
                        <Route exact path='/portfolio' component={PortfolioDetail}></Route>
                        <Route path="/create-profile" render={(props) => <CreateProfile {...props}/>}/>
                    </Switch>
                </ScrollToTop>
            </Router>
        </div>
    )
}