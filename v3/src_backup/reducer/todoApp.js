/**
 * Created by sunsu on 2016/9/12.
 */
import { combineReducers } from 'redux';
import {todo} from './todo'
import {show} from './filter'

const todoApp = combineReducers({
    todo,
    show
});

export default todoApp;