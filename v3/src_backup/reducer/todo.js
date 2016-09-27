/**
 * Created by sunsu on 2016/9/12.
 */
import {ADD_TODO,COMPLETE_TODO} from '../actionsType/actionsType'

export function todo(state=[],action){
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    complete:false
                }
            ];
        case COMPLETE_TODO:
            console.log('aaaaaa');
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    complete: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}