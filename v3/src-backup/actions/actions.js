/**
 * Created by sunsu on 2016/9/14.
 */
import {AddTodo,TodoComplete,VisibleFilter} from '../actionType/actionType'

export function addTodo(text){
    return {
        type:AddTodo,
        text
    }
}

export function todoComplete(index){
    return {
        type:TodoComplete,
        index
    }
}

export function visibleFilter(filter){
    return {
        type:VisibleFilter,
        filter
    }
}