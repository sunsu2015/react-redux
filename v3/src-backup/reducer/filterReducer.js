/**
 * Created by sunsu on 2016/9/14.
 */
import {VisibleFilter,Filters} from '../actionType/actionType'
const {ALL} = Filters
export default function filter(state=ALL,action){
    switch(action.type){
        case VisibleFilter:
            console.log('filter change');
            return action.filter;
        default:
            return state;
    }
}