import React from 'react';
import BulletList from '../reusable/BulletList'

import './Intern.css'

const Intern = () => {
    return (
        <div>

            <h1>EGABI</h1>

            <h2>OLX - 1 month</h2>
            <ul>
                <li>frontend: C# ASP.NET</li>
                <li>backend: springboot</li>
                <li>database: ORACLE</li>
            </ul>
            
            <h2>TodoApp - 1 month</h2>
            <ul>
                <li>frontend: ReactJS (self taught)</li>
                <li>backend: springboot</li>
                <li>database: ORACLE</li>
            </ul>

<hr/>
            <h1>Fitness Startup</h1>

            <h2>Nodejs</h2>

            <ul>
                <li>How to document code</li>
                <li>Folder Structure</li>
                <li>Nested Destructuring</li>
                <li>Clean Code</li>
            </ul>

            <h2>ReactJS</h2>

            <ul>
                <li>Admin Panel</li>
                <li>Select Themes for Entire Website</li>
            </ul>


        </div>
    );
};

export default Intern;