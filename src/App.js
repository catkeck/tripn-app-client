import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
import Navbar from './components/Navbar'
import AuthAdapter from './adapters/AuthAdapter'
import ProfileContainer from './components/Profile/ProfileContainer'
import Home from './components/Static/Home'
import SearchContainer from './components/Search/SearchContainer'
import ItineraryContainer from './components/Search/ItineraryContainer'
import Contact from './components/Static/Contact'
import AuthUber from './components/Uber/AuthUber'
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/profile'} render={(history) => <ProfileContainer history={history}/>}/>
        <Route exact path={'/login'} render={({history}) => <Login history={history}/>}/>
        <Route exact path={'/search'} render={(history) => <SearchContainer history={history}/>}/>
        <Route exact path={'/signup'} render={({history}) => <Signup history={history} handleLoginAndSignup={this.handleLoginAndSignup}/>}/>
        <Route path={'/search/:location'} render={(match) => <ItineraryContainer data={match}/>}/>
        <Route exact path={'/contactus'} component={Contact}/>
        <Route path={'/uber'} render={(match) => <AuthUber code={match}/>}/>
        <div className="footer">
          <div className="auth-links"> 
            <Link to={'/contactus'}> Contact Us</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
