import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import itineraryReducer from './reducers/itineraryReducer'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(itineraryReducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><Route path="/" component={App}/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
