/**
 * Created by sunsu on 2016/9/12.
 */
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER} from '../actionsType/actionsType';

export function addTodo(text){
    return {
        type:ADD_TODO,
        text
    }
}
export function completeTodo(index) {
    return {
        type:COMPLETE_TODO,
        index
    }
}
export  function setVisibility(filter){
    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}