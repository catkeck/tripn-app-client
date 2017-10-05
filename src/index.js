import React from 'react';
import ReactDOM from 'react-dom';
import './weather-icons-master/css/weather-icons.css'
import './weather-icons-master/css/weather-icons-wind.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers , compose} from 'redux'
import itineraryReducer from './reducers/itineraryReducer'
import profileReducer from './reducers/profileReducer'
import searchReducer from './reducers/searchReducer'
import loginReducer from './reducers/loginReducer'
import uberReducer from './reducers/uberReducer'
import uberRideReducer from './reducers/uberRideReducer'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({itinerary: itineraryReducer,profile: profileReducer, search: searchReducer, login: loginReducer, uber: uberReducer, uberRide: uberRideReducer})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><Route path="/" component={App}/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();