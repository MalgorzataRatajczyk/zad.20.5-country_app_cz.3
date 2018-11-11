import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import DevTools from './DevTools.js';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import {getCountries} from './actions/actions-countries.js';
import './country.css';

store.dispatch(getCountries());

render(
    <Provider store={store}>
        <div>
            <DevTools />
            <Router history={hashHistory} routes={routes}/>
        </div>   
    </Provider>,
    document.getElementById('root')
);