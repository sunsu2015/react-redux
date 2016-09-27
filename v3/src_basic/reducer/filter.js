/**
 * Created by sunsu on 2016/9/18.
 */

import {FilterChange,Filters} from '../actionType/actionType'

export function filter(state=Filters.all,action) {
    switch (action.type){
        case FilterChange:
            return action.filter;
        default:
            return state;
    }
}