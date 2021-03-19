import logo from './logo.svg';
import './App.css';

// libraries
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


// visuals
import CV from './CV/Main'

function App() {
  return (
    <div>
      <Router>
        <CV />
      </Router>
    </div>
  );
}

export default App;
