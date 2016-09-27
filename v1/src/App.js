import React ,{Component} from 'react';
import {redux} from 'redux';
import {connect} from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
    
export default class App extends Component{
    componentWillReceiveProps(){
        console.log(6)
    }
    render(){
        console.log(7)
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return(
            <div>
                <AddTodo onAddClick={text=>{console.log(2);dispatch(addTodo(text));}} />
                <TodoList todos={visibleTodos} onClick={index=>dispatch(completeTodo(index))} />
                <Footer
                        filter={visibilityFilter}
                        onFilterChange={nextFilter =>dispatch(setVisibilityFilter(nextFilter))}
                />
            </div>
        )
    }
}

App.propTypes = {
    visibleTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })),
    visibilityFilter: React.PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

function select(state) {
    console.log(5);
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

export default connect(select)(App);