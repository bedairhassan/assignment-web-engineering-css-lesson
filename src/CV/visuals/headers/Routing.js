import React from 'react';

import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';

// components
import Brief from '../Routing/Brief/Brief'
import Contact from '../Routing/Contact/Contact'
import Intern from '../Routing/Intern/Intern'

const Routing = () => {
    return (
        <div>
            <Switch>
            <Route exact path="/brief"><Brief /></Route>
            <Route exact path="/intern"><Intern /></Route>
                <Route exact path="/contact"><Contact /></Route>
            </Switch>
        </div>
    );
};

export default Routing;