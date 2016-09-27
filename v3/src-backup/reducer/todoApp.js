/**
 * Created by sunsu on 2016/9/14.
 */
import {combineReducers} from 'redux'
import filter from './filterReducer'
import todo from './todo'
const todoApp = combineReducers({
    todo,
    filter
});
export default todoApp

