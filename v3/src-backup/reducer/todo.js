/**
 * Created by sunsu on 2016/9/14.
 */
import {AddTodo,TodoComplete} from '../actionType/actionType'

export default function todo(state=[],action) {
    switch (action.type){
        case AddTodo:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }
            ];
        case TodoComplete:
            return [
                state.slice(0,action.index),
                Object.assign({},state[action.index],{completed:true}),
                state.slice(action.index+1)
            ];
        default:
            return state;
    }
}