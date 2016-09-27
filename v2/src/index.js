/**
 * Created by sunsu on 2016/8/17.
 */
import React from 'react'
import { render } from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './configureStore'
import todoApp from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

// const loggerMiddleware = createLogger()

// let store = createStore(todoApp,applyMiddleware(thunkMiddleware,loggerMiddleware));
let store = configureStore();
let rootElement = document.getElementById('root')
render(
    <Provider store = {store}>
        <App />
    </Provider>,
    rootElement
)