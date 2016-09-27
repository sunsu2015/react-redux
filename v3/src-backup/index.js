/**
 * Created by sunsu on 2016/9/14.
 */
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './container/App'
import todoApp from './reducer/todoApp'
import {addTodo,todoComplete,visibleFilter} from './actions/actions'
import {Filters} from './actionType/actionType'
let store = createStore(todoApp);
let unsubscribe = store.subscribe(()=>
    console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store1'))
store.dispatch(todoComplete(0))
store.dispatch(todoComplete(1))
store.dispatch(visibleFilter(Filters.COMPLETE))
let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
)