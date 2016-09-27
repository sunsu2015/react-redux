/**
 * Created by sunsu on 2016/8/17.
 */
import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import todoApp from './reducers'

let store = createStore(todoApp);
let unsubscribe = store.subscribe(() => //监听状态的变化
    console.log(store.getState())
)
let rootElement = document.getElementById('root')
render(
    <Provider store = {store}>
        <App />
    </Provider>,
    rootElement
)