/**
 * Created by sunsu on 2016/9/18.
 */

import {AddTodo,CompleteTodo} from '../actionType/actionType'
export function todo(state=[],action){
    switch(action.type){
        case AddTodo:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }
            ];
        case CompleteTodo:
            return [
                ...state.slice(0,action.index),
                Object.assign({},state[action.index],{completed:true}),
                ...state.slice(action.index+1)
            ];
        default:
            return state;
    }
}