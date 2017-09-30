import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import AuthAdapter from './adapters/AuthAdapter'
import Profile from './components/Profile'
import Home from './components/Home'
import Search from './components/Search'
import Itinerary from './components/Itinerary'
import Contact from './components/Contact'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/profile'} render={(history) => <Profile history={history}/>}/>
        <Route exact path={'/login'} render={({history}) => <Login history={history}/>}/>
        <Route exact path={'/search'} render={(history) => <Search history={history}/>}/>
        <Route exact path={'/signup'} render={({history}) => <Signup history={history} handleLoginAndSignup={this.handleLoginAndSignup}/>}/>
        <Route path={'/search/:location'} render={(match) => <Itinerary data={match}/>}/>
        <Route path={'/search/:location/:from/:to'} render={(match) => <Itinerary data={match}/>}/>
        <Route exact path={'/contactus'} component={Contact}/>
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
