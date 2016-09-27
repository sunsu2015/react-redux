/**
 * Created by sunsu on 2016/9/19.
 */
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER} from './actionsType'

export function add(text){
    return {
        type:ADD_TODO,
        text
    }
}

export function complete(index){
    return {
        type:COMPLETE_TODO,
        index
    }
}

export function filter(filter){
    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}