/**
 * Created by sunsu on 2016/8/22.
 */
import {add,complete,filter} from './actions'
export function addTodo(text) {
    console.log(3);
    return dispatch => dispatch(add(text));
}

export function completeTodo(index) {
    return dispatch => dispatch(complete(index));
}

export function setVisibilityFilter(filterName) {
    return dispatch => dispatch(filter(filterName));
}