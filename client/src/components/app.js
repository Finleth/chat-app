import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import SignUp from './signup';
import SignIn from './signin';
import Nav from './nav';

const App = () => (
    <div className="container">
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
    </div>
);

export default App;
