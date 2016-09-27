/**
 * Created by sunsu on 2016/9/18.
 */
import React ,{Component} from 'react'
import {connect} from 'react-redux'
import AddTode from '../component/AddTodo'
import TodoList from '../component/TodoList'
import Footer from '../component/Footer'
import {Filters} from '../actionType/actionType'
import {add,complete,changeFilter} from '../action/action'
class App extends Component{
    render(){
        const { dispatch, visibleTodos, filter } = this.props;
        return (
            <div>
                <AddTode onAddClick={(text)=>dispatch(add(text))}/>
                <TodoList todos={visibleTodos}
                        onClick={(index)=>dispatch(complete(index))}/>
                <Footer filter={filter} onClick={(filter)=>dispatch(changeFilter(filter))}/>
            </div>
        )
    }
}
function selectTodos(todos,filter){
    switch(filter){
        case Filters.all:
            return todos;
        case Filters.active:
            return todos.filter(todo=>todo.completed);
        case Filters.complete:
            return todos.filter(todo=>!todo.completed);
    }
}

function select(state){
    return {
        visibleTodos:selectTodos(state.todo,state.filter),
        filter:state.filter
    }
}

export default connect(select)(App)