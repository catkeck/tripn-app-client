import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import AuthAdapter from './adapters/AuthAdapter'
import Profile from './components/Profile'
import Home from './components/Home'
import Search from './components/Search'
import Itinerary from './components/Itinerary'

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
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
