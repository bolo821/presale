import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages';
import NotFound from './pages/NotFound';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    )
}

export default Routes;