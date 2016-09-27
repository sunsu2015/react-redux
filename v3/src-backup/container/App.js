/**
 * Created by sunsu on 2016/9/14.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import AddTodo from '../component/AddTodo'
import TodoList from '../component/TodoList'
import Footer from '../component/Footer'

import {Filters} from '../actionType/actionType'

class App extends Component{
    render(){
        return(
            <div>
                <AddTodo onAddClick={(text)=>console.log('add todo',text)}/>
                <TodoList todos={
                    [
                        {
                            text:'a',
                            completed:false
                        },
                        {
                            text:'b',
                            completed:true
                        }
                    ]
                } onClick={index=>console.log('todo click',index)}/>
                <Footer filter="SHOW_ALL" onClick={(name)=>console.log('filter change',name)}/>
            </div>
        )
    }
}

function selectTodos(todos, filter) {
    switch (filter) {
        case Filters.ALL:
            return todos;
        case Filters.COMPLETE:
            return todos.filter(todo => todo.completed);
        case Filters.ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
function select(state) {
    return {
        visibleTodos: selectTodos(state.todo, state.filter),
        visibilityFilter: state.filter
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);