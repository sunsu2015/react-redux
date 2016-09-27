/**
 * Created by sunsu on 2016/9/18.
 */

import {AddTodo,CompleteTodo,FilterChange} from '../actionType/actionType'
export function add(text){
    return {
        type:AddTodo,
        text
    }
}
export function complete(index){
    return {
        type:CompleteTodo,
        index
    }
}

export function changeFilter(filter) {
    return {
        type:FilterChange,
        filter
    }
}