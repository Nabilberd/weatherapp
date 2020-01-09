
import { createStore,compose, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
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
const enhancer = process.env.NODE_ENV === "development" ? composeWithDevTools(applyMiddleware(axiosMiddleware(client))) : compose(applyMiddleware(axiosMiddleware(client)));
//create store using combine reducers and axios middleware
const store = createStore(
    combineReducers({
        ...reducers,
    }),enhancer
);

export default store;
