/**
 * Created by sunsu on 2016/9/12.
 */
import {SET_VISIBILITY_FILTER,VisiblityFilter} from '../actionsType/actionsType'
const {SHOW_ALL} = VisiblityFilter;
export function show(state=SHOW_ALL,action){
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            console.log('show change');
            return action.filter;
        default:
            return state;
    }
}