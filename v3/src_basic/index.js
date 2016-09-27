/**
 * Created by sunsu on 2016/9/18.
 */
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducer/reducer'
import {add,complete,changeFilter} from './action/action'
import {Filters} from './actionType/actionType'
import App from './container/App'

let store = createStore(reducer)

let undiscribe = store.subscribe(
    ()=> console.log(store.getState())
)

// store.dispatch(add('c'));
// store.dispatch(add('b'));
// store.dispatch(complete(1));
// store.dispatch(complete(0));
// store.dispatch(changeFilter(Filters.active));

let root = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
)