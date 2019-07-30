import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { API_URL_API } from './actions/config'
import * as reducers from './reducers';

//all axios can be used, shown in axios documentation
const client = axios.create({
    // relative uri
    baseURL: API_URL_API,
    responseType: 'json'
});

//create store using combine reducers and axios middleware
const store = createStore(
    combineReducers({
        ...reducers,
    }),
    applyMiddleware(
        axiosMiddleware(client),
    )
);

export default store;
