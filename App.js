import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';

 
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/Home">Home</NavLink>
            <NavLink activeClassName="active" to="/Login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Logout</NavLink>
          </div>
          <div className="grid">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
          </Switch>
          </div>
          <div className="wrapper">
            <switch>
            <Route path="/Home" component={Home} />
            </switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
