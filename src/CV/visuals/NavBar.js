import React from 'react';

import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';


const NavBar = ({ isSignedIn }) => {
    return (
        <React.Fragment>
            {/* has SignOut */}
            < div class="main" class="ul" >
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <a>
                        <Link to="/contact" class="nav-item nav-link px-3">Contact </Link>
                    </a>
                    <a>
                        <Link to="/brief" class="nav-item nav-link px-3">Brief </Link>
                    </a>
                    <a>
                        <Link to="/intern" class="nav-item nav-link px-3">Intern </Link>
                    </a>

                </nav>
            </div >
        </React.Fragment >
    );
};

export default NavBar;