/**
 * Created by sunsu on 2016/9/18.
 */
import {combineReducers} from 'redux'
import {todo} from './todo'
import {filter} from './filter'
export const reducer = combineReducers(
    {
        todo,
        filter
    }
)