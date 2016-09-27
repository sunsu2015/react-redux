/**
 * Created by sunsu on 2016/9/12.
 */
import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import {addTodo,completeTodo,setVisibility} from './actions/actions'
import {VisiblityFilter} from './actionsType/actionsType'
import App from './containers/App'
import todoApp from './reducer/todoApp'


let store = createStore(todoApp);

let unsubscribe = store.subscribe(()=>
    console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store1'))
store.dispatch(completeTodo(0))
store.dispatch(completeTodo(1))
store.dispatch(setVisibility(VisiblityFilter.SHOW_COMPLETED))

let rootElement = document.getElementById('root')
render(
    <div>
        <App />
    </div>,
    rootElement
)